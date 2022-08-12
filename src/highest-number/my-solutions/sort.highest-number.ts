export function getHighestNumber(numbers: number[]) {
  return numbers.sort((a, b) => a - b).reverse()[0]
}
