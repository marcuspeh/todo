import { Context } from "koa";
import AuthService from "../services/authService";

class AuthController {
    private authService: AuthService = new AuthService()

    public async getPublicKey(ctx: Context) {
        const publicKey: string = process.env.PUBLIC_KEY

        ctx.body = {
            publicKey: publicKey
        }
    }

    public async encrypt(ctx: Context) {
        const ciphertext = await this.authService.encrypt(ctx.request.body.text)

        ctx.body = {
            ciphertext: ciphertext
        }
    }

    public async decrypt(ctx: Context) {
        const plaintext = await this.authService.decrypt(ctx.request.body.text)

        ctx.body = {
            plaintext: plaintext
        }
    }
}

export default new AuthController()