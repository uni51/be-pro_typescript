function double_19<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}

type NumberToNumber = (arg: number) => number;

const plus2: NumberToNumber = double_19((x) => x + 1);
console.log(plus2(10)); // 12
