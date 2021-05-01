import arrayToHashObj from "./arrayToHashObj"

/**
 * Function will iterate over all the sub properties of given object and add many new object to them
 *
 * @param {Object} givenObject
 * @param {Array|Object} data
 * @returns {Object}
 */
const enrichObjects = (givenObject, data) => {
  let newProps = data

  if (Array.isArray(data))
    newProps = data.reduce((acc, obj) => {
      acc = { ...obj }
      return acc
    })

  const enrichData = Object.keys(givenObject).map((id) => ({
    ...givenObject[id],
    ...newProps,
  }))

  return arrayToHashObj(enrichData)
}

export default enrichObjects
