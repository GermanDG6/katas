type Basket = Record<string, number>

// export function fruitCounter(fruits: string[]): Basket {
//   const fruitBasket: Basket = {}
//   fruits.forEach(fruit => {
//     if (fruitBasket[fruit] === undefined) {
//       fruitBasket[fruit] = 0
//     }
//     fruitBasket[fruit]++
//   })
//   return fruitBasket
// }

export function fruitCounter(fruits: string[]): Basket {
  return fruits.reduce<Basket>((basket, fruit) => {
    if (basket[fruit] === undefined) {
      basket[fruit] = 0
    }
    basket[fruit]++
    return basket
  }, {})
}
