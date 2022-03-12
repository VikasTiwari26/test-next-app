export const setDataInLocalStorage =(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
} 

// export const getDataFromLocalStorage =(key)=>{
//     let data = window.localStorage.getItem(key)
//     return JSON.parse(data)
// }

export const removeDataFromLocalStorage =(key)=>{
    localStorage.removeItem(key)
}
