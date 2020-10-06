import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import  { createLogger } from "redux-logger";

const middleWare = [thunk, createLogger()]

export const store = createStore(reducer, {}, applyMiddleware(...middleWare))