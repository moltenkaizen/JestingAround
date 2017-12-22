const MathModule = require('../myMath');

it('works', () => {
  expect(1).toBe(1)
})

describe('my math module', () => {
  it('adds two numbers', () => {
    expect(MathModule.add(1, 2)).toBe(3)
  })
  it('multiplies two numbers', () => {
    expect(MathModule.multiply(3, 2)).toBe(6)
  })
  it('divides two numbers', () => {
    expect(MathModule.divide(6, 2)).toBe(3)
  })
  it('subtracts two numbers', () => {
    expect(MathModule.subtract(3, 2)).toBe(1)
  })
})