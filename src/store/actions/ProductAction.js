import { ADD_PRODUCT, SET_PRODUCT } from "./type"

export const addProduct = (item) => async dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: item
    })
}

export const setProduct = (items) => async dispatch => {
    dispatch({
        type: SET_PRODUCT,
        payload: items
    })
}