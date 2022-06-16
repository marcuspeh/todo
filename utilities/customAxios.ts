import axios, { AxiosError } from "axios"
import Router from "next/router"
import { getCookies, getUserCsrf } from "../apiController/helper/apiHelper"

const customAxios = axios.create({})

customAxios.interceptors.request.use((config) => {
    config.withCredentials = true
    config.headers = {
        Cookie: getCookies(),
        TONIC: getUserCsrf(),
        API_TOKEN: process.env.API_KEY || "",
        'Content-Type': 'application/json'
    }
})

customAxios.interceptors.response.use((response) => {
    return response
}, (error: AxiosError) => {
    if (error.response?.status === 401 && Router.pathname !== '/login') {
        Router.push("/login")
    } 
    return Promise.reject(error)
})

export default customAxios