// Core Middlewares
import logMiddleware from "./log"
import enrichMiddleware from "./enrich"
import throttleMiddleware from "./throttle"

const coreMiddlewares = [logMiddleware, throttleMiddleware, enrichMiddleware]

export default coreMiddlewares
