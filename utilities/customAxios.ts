import axios, { AxiosError } from "axios"
import Router from "next/router"
import { getCookies, getUserCsrf } from "../apiController/helper/apiHelper"

const customAxios = axios.create({})

customAxios.interceptors.request.use((config) => {
    const tonic = getUserCsrf()
    
    config.withCredentials = true
    config.headers = tonic ? {
        Cookie: getCookies(),
        TONIC: getUserCsrf(),
        APITOKEN: process.env.API_KEY || "",
        'Content-Type': 'application/json;charset=utf-8',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store',
        'Strict-Transport-Security': ' max-age=31536000',
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL || ""
    } : {
        APITOKEN: process.env.API_KEY || "",
        'Content-Type': 'application/json',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store',
        'Strict-Transport-Security': ' max-age=31536000',
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL || ""
    }
    return config
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