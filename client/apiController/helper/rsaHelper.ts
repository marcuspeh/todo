import customAxios from "../../utilities/customAxios";
import NodeRSA from 'node-rsa'

export async function encryptPassword(password: string): Promise<string> {
    const response = await customAxios.get("/api/crypto/getPublicKey")
    const publicKey = new NodeRSA(response.data.publicKey)
    const encryptPassword = publicKey.encrypt(password, 'base64')

    return encryptPassword
}