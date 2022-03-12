import { getCookie } from "../utils/cookie"


export const appId = 'WEBAPP'

export const getAuthToken = () => {
    try {
        return getCookie("accessToken")
    } catch (error) {
        return false
    }
}

export const setAuthToken = ({ accessToken, validTimeInSec }) => {
    document.cookie = `accessToken=${accessToken}; max-age=${validTimeInSec}`
}

export const generateCorrelationId = () => {
    const length = 10;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';   
    for (var i = length; i > 0; --i)    
    result += chars[Math.floor(Math.random() * chars.length)];
    return result
}