// Dependencies
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// Core Files
import App from "./components/App"
import store from "./core/redux/store"

const Main = (
  <Provider store={store}>
    <App />
  </Provider>
)
const rootElement = document.getElementById("root")

ReactDOM.render(Main, rootElement)

window.store = store
