// function map(array: number[], callback: (value: number) => number): number[] {
//   const result: number[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//   }
//   return result;
// }

// const data_4_6_3 = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data_4_6_3, (x) => x * 10);
// console.log(result); // [10, 10, 20, 30, 50, 80, 130] と表示される

function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}

const data_4_6_3_2 = [1, -3, -2, 8, 0, -1];
const result = map2(data_4_6_3_2, (x) => x >= 0);

console.log(result); // [true, false, false, true, true, false] と表示される
