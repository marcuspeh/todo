import Cookies from "universal-cookie"
import { USER_CSRF_TOKEN, USER_TOKEN } from "../../utilities/constants"

const cookies = new Cookies()

export function getUserCsrf(): string {
    return cookies.get(USER_CSRF_TOKEN)
}

export function clearUserToken(): void {
    cookies.remove(USER_TOKEN)
}

export function getCookies(): string {
    return `GIN=${cookies.get(USER_TOKEN)}; TONIC=${cookies.get(USER_CSRF_TOKEN)}`
}

export function extractErrorCode(err: any): string {
    if (err && err.data && err.data.code) {
        return err.data.code
    }
    return ""
}
