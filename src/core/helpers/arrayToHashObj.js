const arrayToHashObj = (array) => {
  const reducer = (acc, obj) => {
    acc[obj.id] = obj
    return acc
  }
  return array.reduce(reducer, {})
}

export default arrayToHashObj
