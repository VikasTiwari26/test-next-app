const axios = require("axios")
const { getApiData } = require("../api/api")
const {
    setAuthToken,
    getAuthToken,
    appId,
    generateCorrelationId,
} = require("../api/headers")

export default class AxiosRequest {
    constructor(server = false) {
        this.__createClient(server)
    }

    __fetchToken = async () => {
        try {
            const { url, body } = getApiData("authenticate")
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    correlationId: generateCorrelationId(),
                    appId: appId,
                },
                body: JSON.stringify(body),
            })
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err.message)
        }
    }

    __createClient = () => {
        var server = true
        if (typeof document === "undefined") {
            server = false
        }
        this.axiosClient = axios.create()
        this.axiosClient.defaults.headers.common["correlationId"] =
            generateCorrelationId()
        this.axiosClient.defaults.headers.common["appId"] = appId
        this.axiosClient.interceptors.request.use(async (config) => {
            var token = null
            if (server) {
                const accessToken = getAuthToken()
                if (!accessToken) {
                    const tokenJson = await this.__fetchToken()
                    setAuthToken(tokenJson)
                }
            } else {
                const tokenJson = await this.__fetchToken()
                if (tokenJson) {
                    token = tokenJson["accessToken"]
                }
            }

            let newConfig = Object.assign({}, config)
            newConfig.headers.Authorization = `Bearer ${
                token ?? getAuthToken()
            }`
            return newConfig
        })
    }

    getClient = () => {
        return this.axiosClient
    }

    getCancelTokenSource = () => {
        return axios.default.CancelToken.source()
    }
}