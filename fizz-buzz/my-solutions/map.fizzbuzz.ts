export function fizzBuzz(number: number) {
  return Array.from({ length: number }, (_, x) => x + 1).map(x =>
    x % 3 === 0 ? (x % 5 === 0 ? 'fizzbuzz' : 'fizz') : x % 5 === 0 ? 'buzz' : x
  )
}
