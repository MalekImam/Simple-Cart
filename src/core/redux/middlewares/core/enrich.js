import enrichObjects from "../../../helpers/enrichObject"

const enrichMiddleware = () => (next) => (action) => {
  let enrichData = action.meta && action.meta.enrich

  if (enrichData) {
    const key = action.meta.enrichKey || "byId"
    const payloadData =
      action.payload[key] || action.payload.data || action.payload
    action.payload[key] = enrichObjects(payloadData, enrichData)
  }

  next(action)
}

export default enrichMiddleware
