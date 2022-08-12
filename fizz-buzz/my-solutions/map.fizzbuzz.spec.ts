import { fizzBuzz } from './map.fizzbuzz'
describe('FizzBuzz', () => {
  it('given a number must return a list starting at 1 and whose length is the same as the number.', () => {
    const given = 2

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2])
  })
  it('If any number is divisible by 3 should replace the number with "fizz"', () => {
    const given = 3

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2, 'fizz'])
  })

  it('If any number is divisible by 5 should replace with "buzz"', () => {
    const given = 5

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })
  it('', () => {
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
