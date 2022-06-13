import jwt from 'jsonwebtoken'
import { errorCode } from "../errors/errorCode"
import { Context } from "koa"
import CustomError from '../errors/customError'
import TokenService from '../services/tokenService'
import { TOKEN_TYPE } from '../entity/enum/tokenType'
import Token from '../entity/token'
import JwtPayloadModel from '../models/jwtPayloadModel'

const tokenService: TokenService = new TokenService()

const validateToken = async (ctx: Context, token: any, tokenType: TOKEN_TYPE) => {
    if (!token) {
        throw new CustomError(errorCode.TOKEN_EXPIRED)
    }

    var payload;
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET);    
    } catch (e) {
        throw new CustomError(errorCode.TOKEN_EXPIRED)
    }

    const jwtPayloadModel: JwtPayloadModel = JwtPayloadModel.from(payload)
    const tokenObject: Token = await tokenService.verifyToken(jwtPayloadModel.tokenId, jwtPayloadModel.userId, tokenType)

    if (tokenType === TOKEN_TYPE.USER_TOKEN) {
        const payload = {
            userId: tokenObject.user.id,
            tokenId: tokenObject.id,
            expiryDate: tokenObject.expiryDate
        }

        const meta: any = ctx.request.header.meta || {}
        ctx.request.header.meta = { ...meta, ...payload }
    }
    
}

const auth = async (ctx: Context, next: any) => {
    const tokenCsrf = ctx.request.header.tonic
    const token = ctx.cookies.get("GIN")

    validateToken(ctx, token, TOKEN_TYPE.USER_TOKEN)
    validateToken(ctx, tokenCsrf, TOKEN_TYPE.USER_CSRF_TOKEN)

    await next()
}

export default auth