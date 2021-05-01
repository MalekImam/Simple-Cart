import { getRandInt } from "../../../core/helpers/randomNumber"

export const createMockProducts = (num = 100) => {
  const data = new Array(num).fill(null).map((_, id) => ({
    id: ++id,
    name: `Product ${id}`,
    price: getRandInt(50),
    wieght: getRandInt(100, 10000),
  }))

  const dataByID = data.reduce((acc, product) => {
    acc[product.id] = product
    return acc
  }, {})
  return dataByID
}
