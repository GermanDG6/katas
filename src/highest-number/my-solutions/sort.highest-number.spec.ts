import { getHighestNumber } from './sort.highest-number'

describe('getHighestNumber', () => {
  it('given an array with only a number shoud retunr the number', () => {
    const given = [100]

    const highestNumber = getHighestNumber(given)

    expect(highestNumber).toBe(100)
  })
  it('given a array with multiple numbers should return the highest number', () => {
    const given = [1, 2, 3]

    const highestNumber = getHighestNumber(given)

    expect(highestNumber).toBe(3)
  })

  it('given a array with negatives values', () => {
    const given = [-1, -2, -3]

    const highestnumber = getHighestNumber(given)

    expect(highestnumber).toBe(-1)
  })
})
