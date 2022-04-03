import { env } from '../env/env'

const api = {
    devBaseUrl: "http://65.0.42.242:8060/",
    uatBaseUrl: "http://65.0.42.242:8060/",
    prodBaseUrl: "http://65.0.42.242:8060/",
    routes: {
        authenticate: {
            devUrl: "api/jwt/v1/authenticate",
            uatUrl: "api/jwt/v1/authenticate",
            qaUrl: "api/jwt/v1/authenticate",
            prodUrl: "api/jwt/v1/authenticate",
            body: { clientId: "authapi", clientSecret: "auth@2O!O" },
        },
        login: {
            devUrl: "customer/api/profile/v1/login",
            uatUrl: "customer/api/profile/v1/login",
            qaUrl: "customer/api/profile/v1/login",
            prodUrl: "customer/api/profile/v1/login",
            body: {
                uname: "",
                pswd: ""
            }
        },
        verifyOtp: {
            devUrl: "customer/api/profile/v1/login/verify",
            uatUrl: "customer/api/profile/v1/login/verify",
            qaUrl: "customer/api/profile/v1/login/verify",
            prodUrl: "customer/api/profile/v1/login/verify",
            body: {
                uname: "",
                otp: ""
            }
        },
        signUp: {
            devUrl: "customer/api/profile/v1/sign-up",
            uatUrl: "customer/api/profile/v1/sign-up",
            qaUrl: "customer/api/profile/v1/sign-up",
            prodUrl: "customer/api/profile/v1/sign-up",
            body: {
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
        contactUs: {
            devUrl: "customer/api/v1/query/add",
            uatUrl: "customer/api/v1/query/add",
            qaUrl: "customer/api/v1/query/add",
            prodUrl: "customer/api/v1/query/add",
            body: {
                uname: "",
                query: "",
                email: "",
                mobile: "9015250935"
            }
        },
        getUser: {
            devUrl: "customer/api/profile/v1/find?customerId=",
            uatUrl: "customer/api/profile/v1/find?customerId=",
            qaUrl: "customer/api/profile/v1/find?customerId=",
            prodUrl: "customer/api/profile/v1/find?customerId=",
            body: {}
        },
        updateProfile: {
            devUrl: "customer/api/profile/v1/update",
            uatUrl: "customer/api/profile/v1/update",
            qaUrl: "customer/api/profile/v1/update",
            prodUrl: "customer/api/profile/v1/update",
            body: {
                customerId: null,
                mobile: "",
                image: "",
                about: "",
                twitter: "",
                instagram: "",
                fb: "",
                linkedin: "",
                country: "",
                "vip": "N",
                fname: "",
                lname: ""
            }
        },
        getProperties: {
            devUrl: "customer/api/property/v1/get",
            uatUrl: "customer/api/property/v1/get",
            qaUrl: "customer/api/property/v1/get",
            prodUrl: "customer/api/property/v1/get",
            body: {}
        },
        getPropertyDetail: {
            devUrl: "customer/api/property/v1/get?propertyId=",
            uatUrl: "customer/api/property/v1/get?propertyId=",
            qaUrl: "customer/api/property/v1/get?propertyId=",
            prodUrl: "customer/api/property/v1/get?propertyId=",
            body: {}
        },
        removeProperty: {
            devUrl: "customer/api/property/v1/remove",
            uatUrl: "customer/api/property/v1/remove",
            qaUrl: "customer/api/property/v1/remove",
            prodUrl: "customer/api/property/v1/remove",
            body: {
                properties: [
                    {
                        "uid": 3,
                        "propertyId": 11
                    }
                ]
            }
        },
        addProperty: {
            devUrl: "customer/api/property/v1/add",
            uatUrl: "customer/api/property/v1/add",
            qaUrl: "customer/api/property/v1/add",
            prodUrl: "customer/api/property/v1/add",
            properties: [{
                "propertyId": "",
                discountAmt: 700,
                actualAmt: 1245.9,
                propertyName: "",
                title: "",
                propertyAgentName: "",
                agentAddress: "",
                agentEmail: "",
                agentMobile: "",
                agentDescription: "",
                area: "",
                status: "",
                bedrooms: "",
                bathrooms: "",
                garages: "",
                description: "",
                size: "",
                features: "",
                waterfront: "",
                builtIn: "",
                parking: "",
                view: "",
                waterfrontDescription: ""
            }]
        },
        addToCart: {
            devUrl: "customer/api/course/v1/cart/add",
            uatUrl: "customer/api/course/v1/cart/add",
            qaUrl: "customer/api/course/v1/cart/add",
            prodUrl: "customer/api/course/v1/cart/add",
            body: {
                actualAmt: null,
                courseId: null,
                customerId: null,
                discountAmt: null,
                propertyQuantity: null
            }
        },
        removeFromCart: {
            devUrl: "customer/api/course/v1/cart/remove",
            uatUrl: "customer/api/course/v1/cart/remove",
            qaUrl: "customer/api/course/v1/cart/remove",
            prodUrl: "customer/api/course/v1/cart/remove",
            body: {
                courseId: null,
                customerId: null
            }
        },
        getCartDetail: {
            devUrl: "customer/api/course/v1/cart/get?customerId=",
            uatUrl: "customer/api/course/v1/cart/get?customerId=",
            qaUrl: "customer/api/course/v1/cart/get?customerId=",
            prodUrl: "customer/api/course/v1/cart/get?customerId=",
            body: {}
        },
        purchasedPropertiesByCustomerId: {
            devUrl: "customer/api/course/v1/purchased/courses?customerId=",
            uatUrl: "customer/api/course/v1/purchased/courses?customerId=",
            qaUrl: "customer/api/course/v1/purchased/courses?customerId=",
            prodUrl: "customer/api/course/v1/purchased/courses?customerId=",
            body: {}
        },
        purchasedPropertiesByPropertyId: {
            // http://65.0.42.242:8060/customer/api/course/v1/purchase/get?customerId=1&courseId=13
            devUrl: "customer/api/course/v1/purchase/get",
            uatUrl: "customer/api/course/v1/purchase/get",
            qaUrl: "customer/api/course/v1/purchase/get",
            prodUrl: "customer/api/course/v1/purchase/get",
            body: {}
        },
        saveTransaction: {
            devUrl: "customer/api/course/v1/purchase/save",
            uatUrl: "customer/api/course/v1/purchase/save",
            qaUrl: "customer/api/course/v1/purchase/save",
            prodUrl: "customer/api/course/v1/purchase/save",
            body: {
                courseId: null,
                customerId: null,
                transactionId: "FREE",
                propertyQuantity: null,
                propertyStatus: "CAN BUY"
            }
        },
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