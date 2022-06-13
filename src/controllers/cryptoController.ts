import { Context } from "koa";
import CryptoService from "../services/cryptoService";

class CryptoController {
    private CryptoService: CryptoService = new CryptoService()

    public async getPublicKey(ctx: Context) {
        const publicKey: string = process.env.PUBLIC_KEY

        ctx.body = {
            publicKey: publicKey
        }
    }

    public async encrypt(ctx: Context) {
        const ciphertext = await this.CryptoService.encrypt(ctx.request.body.text)

        ctx.body = {
            ciphertext: ciphertext
        }
    }

    public async decrypt(ctx: Context) {
        const plaintext = await this.CryptoService.decrypt(ctx.request.body.text)

        ctx.body = {
            plaintext: plaintext
        }
    }

    public async hashPasword(ctx: Context) {
        const passwordHash = await this.CryptoService.hashPassword(ctx.request.body.password)

        ctx.body = {
            passwordHash: passwordHash
        }
    }

    public async checkPassword(ctx: Context) {
        await this.CryptoService.checkPassword(ctx.request.body.password, ctx.request.body.passwordHash)

        ctx.body = {
            message: "Success"
        }
    }
}

export default new CryptoController()