import {env} from '../env/env'

const api = {
    devBaseUrl: "http://65.0.42.242:8060/",
    uatBaseUrl: "http://65.0.42.242:8060/",
    prodBaseUrl: "http://65.0.42.242:8060/",
    routes: {
        authenticate:{
            devUrl: "api/jwt/v1/authenticate",
            uatUrl: "api/jwt/v1/authenticate",
            qaUrl: "api/jwt/v1/authenticate",
            prodUrl: "api/jwt/v1/authenticate",
            body: { clientId: "authapi", clientSecret: "auth@2O!O" },
        },
        login:{
            devUrl: "customer/api/profile/v1/login",
            uatUrl: "customer/api/profile/v1/login",
            qaUrl: "customer/api/profile/v1/login",
            prodUrl: "customer/api/profile/v1/login",
            body:{
                uname: "",
                pswd: ""
            }
        },
        signUp:{
            devUrl: "customer/api/profile/v1/sign-up",
            uatUrl: "customer/api/profile/v1/sign-up",
            qaUrl: "customer/api/profile/v1/sign-up",
            prodUrl: "customer/api/profile/v1/sign-up",
            body:{
                uname: "",
                pswd: "",
                pswd1: "",
                email: "",
                mobile: "9015250935",
                image: "",
                about: "",
                twitter: "",
                instagram: "",
                fb: "",
                linkedin: "",
                country: "",
                fname: "",
                lname: ""
            }
        },
        contactUs:{
            devUrl: "customer/api/v1/query/add",
            uatUrl: "customer/api/v1/query/add",
            qaUrl: "customer/api/v1/query/add",
            prodUrl: "customer/api/v1/query/add",
            body:{
                uname: "",
                query: "",
                email: "",
                mobile: "9015250935"
            }
        },
        getUser:{
            devUrl: "customer/api/profile/v1/find?customerId=",
            uatUrl: "customer/api/profile/v1/find?customerId=",
            qaUrl: "customer/api/profile/v1/find?customerId=",
            prodUrl: "customer/api/profile/v1/find?customerId=",
            body:{}
        },
        updateProfile:{
            devUrl: "customer/api/profile/v1/update",
            uatUrl: "customer/api/profile/v1/update",
            qaUrl: "customer/api/profile/v1/update",
            prodUrl: "customer/api/profile/v1/update",
            body:{
                customerId: null,
                mobile: "",
                image: "",
                about: "",
                twitter: "",
                instagram: "",
                fb: "",
                linkedin: "",
                country: "",
                "vip":"N",
                fname: "",
                lname: ""
            }
        }
    }
}

const getUrl = (route) => {
    const baseUrl = api[`${env}BaseUrl`]
    const pathUrl = `${env}Url`
    return `${baseUrl}${api["routes"][route][pathUrl]}`
}

const getBody = (route) => {
    return api["routes"][route]["body"]
}

export const getApiData = (route) => {
    const url = getUrl(route)
    const body = getBody(route)
    return { url, body }
}