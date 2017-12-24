const arrayFun = require('../arrayFun')

it('works', () => {
  expect(1).toBe(1)
})

describe('array processing', () => {
  const vehicles = [
    {name: 'Bob', type: 'car'},
    {name: 'Tim', type: 'truck'},
    {name: 'Alfred', type: 'truck'},
    {name: 'Winnie', type: 'van'}
  ]
  const vehicleTypes = ['car', 'truck', 'van']
  it('1 makes a unique array from an array of objects with a specific property', () => {
    expect(arrayFun.uniqueArray1(vehicles, 'type')).toEqual(expect.arrayContaining(vehicleTypes))
  })
  it('2 makes a unique array from an array of objects with a specific property', () => {
    expect(arrayFun.uniqueArray2(vehicles, 'type')).toEqual(expect.arrayContaining(vehicleTypes))
  })
})
