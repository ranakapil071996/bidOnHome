import { ADD_TOKEN, REMOVE_TOKEN } from "./type"

export const setAuthState = (user) => async  dispatch => {
    dispatch({
        type: ADD_TOKEN,
        payload: user
    })
}
export const removeAuthState = () => async  dispatch => {
    dispatch({
        type: REMOVE_TOKEN
    })
}