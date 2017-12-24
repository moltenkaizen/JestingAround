module.exports.uniqueArray1 = (obj, prop) => {
  let array = []
  obj.forEach((item) => {
    if (!array.includes(item[prop])) {
      array.push(item[prop])
    }
  })
  return array
}

module.exports.uniqueArray2 = (obj, prop) => {
  let set = new Set()
  obj.forEach((item) => {
    set.add(item[prop])
  })
  return Array.from(set)
}
