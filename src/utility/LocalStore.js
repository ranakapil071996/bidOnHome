const productKey = "product";
const tokenKey = "userToken";


export const setProductStore = ( value) => {
    localStorage.setItem(productKey, JSON.stringify(value));
}

export const getProductStore = () => {
    const product =  localStorage.getItem(productKey);
    return product ? JSON.parse(product) : false
}

export const setTokenStore = ( value) => {
    localStorage.setItem(tokenKey, JSON.stringify(value));
}

export const getTokenStore = () => {
    const token =  localStorage.getItem(tokenKey);
    return token ? JSON.parse(token) : false
}

export const removeTokenStore = () => {
    localStorage.removeItem(tokenKey);
}

