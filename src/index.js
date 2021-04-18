// Dependencies
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// Core Files
import App from "./components/App"
import configureStore from "./core/redux/store"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
