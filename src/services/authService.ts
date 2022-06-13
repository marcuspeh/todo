import NodeRSA from 'node-rsa'

export default class AuthService {
    private privateKey = new NodeRSA(process.env.PRIVATE_KEY)
    private publicKey = new NodeRSA(process.env.PUBLIC_KEY)

    public async decrypt(ciphertext: string): Promise<string> {
        return this.privateKey.decrypt(ciphertext, 'utf8')
    }

    public async encrypt(plaintext: string): Promise<string> {
        return this.publicKey.encrypt(plaintext, 'base64')
    }
}
