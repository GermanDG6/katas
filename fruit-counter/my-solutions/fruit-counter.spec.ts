import { fruitCounter } from './fruit-counter'

describe('fruitCounter', () => {
  it('should return a count of all repeated elements', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = fruitCounter(given)

    expect(actual).toEqual({ '🍋': 3, '🍉': 1, '🍒': 1, '🍎': 2, '🍐': 1 })
  })
})
