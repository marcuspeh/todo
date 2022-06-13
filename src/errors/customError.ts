export default class CustomError extends Error {
    public status: number
    private code: string
    private info: string

    public constructor(code: string, info?: string) {
        super(code)
        this.code = code
        this.info = info
        this.status = 400
    }
}