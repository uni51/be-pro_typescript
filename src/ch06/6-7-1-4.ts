function thrower(): never {
  throw new Error("error!!!!");
}

// コンパイルエラーは起きない
const result_6_7_1_4: never = thrower();

const str_6_7_1_4: string = result_6_7_1_4;
console.log(str_6_7_1_4);
