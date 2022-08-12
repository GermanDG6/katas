import { fizzBuzz } from './map.fizzbuzz'

describe('FizzBuzz with map', () => {
  it('given a number should return a list that starting on 1 and whose length is the same as the given number', () => {
    const given = 2

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2])
  })
  it('Every time a number is divisible by 3 replace the number with "fizz"', () => {
    const given = 3

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2, 'fizz'])
  })
  it('Every time a number is divisible by 5 replace the number with "fuzz"', () => {
    const given = 5

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })
  it('Every time a number is divisible by 3 and 5 replace the number with "fizzbuzz"', () => {
    const given = 15

    const result = fizzBuzz(given)

    expect(result).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
