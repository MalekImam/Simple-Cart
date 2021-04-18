// Dep
import { createStore } from "redux"
// Core
import rootReducers from "./reducers"

const configureStore = () => createStore(rootReducers)

export default configureStore
