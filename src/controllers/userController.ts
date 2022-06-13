import User from "../entity/user"
import { Context } from "koa"
import UserService from "../services/userService"
import { loginUserDTO, registerUserDTO } from "./apiSchemas/userDTO"
import dtoValidator from "./helper/dtoValidator"

class UserController {
    private userService: UserService = new UserService()

    public async register(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(registerUserDTO, ctx.request.body)
        const user: User = await this.userService.register(apiDto.name, apiDto.email, apiDto.password)

        ctx.body = {
            user: user
        }
    }

    public async login(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(loginUserDTO, ctx.request.body)
        const user: User = await this.userService.login(apiDto.email, apiDto.password)

        ctx.body = {
            user: user
        }
    }
}

export default new UserController()