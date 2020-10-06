import { ADD_PRODUCT, SET_PRODUCT } from "../actions/type"
import {  setProductStore } from "../../utility"

const initalState = {
    products: []
}

export default (state = initalState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            const newProdts =  { ...state, products: [ ...state.products,action.payload]}
            setProductStore(newProdts);
            return newProdts
        case SET_PRODUCT:
            const setPrdts = { ...state, products: action.payload}
            setProductStore(setPrdts)
            return setPrdts
        default:
            return state
    }
}