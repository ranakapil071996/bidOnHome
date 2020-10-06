import { ADD_TOKEN, REMOVE_TOKEN } from "../actions/type"
import { removeTokenStore, setTokenStore } from "../../utility";

const initalState = { isAuthorised: false, user: null}

export default (state = initalState, action) => {
    switch(action.type){
        case ADD_TOKEN:
            setTokenStore(action.payload)
            return { ...state, isAuthorised: true, user: action.payload}
        case REMOVE_TOKEN:
            removeTokenStore()
            return { ...state, isAuthorised: false, user: null}
        default:
            return state
    }
}