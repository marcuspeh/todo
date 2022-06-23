import axios, { AxiosError } from "axios"
import { getCookies, getUserCsrf } from "../apiController/helper/apiHelper"

const customAxios = axios.create({})

customAxios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.headers = {
        'Content-Type': 'application/json',
        TONIC: getUserCsrf() || "WHAT HAPPEN TO TONIC??",
        APITOKEN: process.env.API_KEY || "",
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL || "",
        'Cache-Control': "no-store",
        ...config.headers
    }
    return config
})

export default customAxios