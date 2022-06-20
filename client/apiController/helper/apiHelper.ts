import Cookies from "universal-cookie"
import { USER_CSRF_TOKEN, USER_TOKEN } from "../../utilities/constants"
import { ErrorMapping } from "../../utilities/errorMessageMapping"

const cookies = new Cookies()

export function getUserCsrf(): string {
    return cookies.get(USER_CSRF_TOKEN)
}

export function clearUserToken(): void {
    cookies.remove(USER_TOKEN)
}

export function getCookies(): string {
    const userToken = cookies.get(USER_TOKEN)
    const userCsrfToken = cookies.get(USER_CSRF_TOKEN)
    
    if (!userToken || !userCsrfToken) {
        return ""
    }
    return `GIN=${userToken}; TONIC=${userCsrfToken}`
}

export function extractErrorCode(err: any): string {
    if (err && err.data && err.data.error && err.data.error.code) {
        return err.data.error.code
    }
    return ""
}

export function extractErrorMessage(err: any): string {
    if (err && err.data && err.data.error && err.data.error.code) {
        const errorCode = err.data.error.code
        return ErrorMapping[errorCode] || ""
    }
    return ""
}
