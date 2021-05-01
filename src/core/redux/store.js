// Dep
import { applyMiddleware, compose, createStore } from "redux"
// Middlewares
import coreMiddlewares from "./middlewares/core"
import appMiddlewares from "./middlewares/app/index"
// Core
import rootReducers from "./reducers"

const middlewareEnhancer = applyMiddleware(
  ...coreMiddlewares,
  ...appMiddlewares
)
const composedEnhancers = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducers, composedEnhancers)

export default store
