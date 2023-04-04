const repeat_4_4_4_2 = <T extends { name: string }>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

type HasNameAndAge_4_4_4_2 = {
  name: string;
  age: number;
};

console.log(
  repeat_4_4_4_2<HasNameAndAge_4_4_4_2>(
    {
      name: "uhyo",
      age: 26,
    },
    3
  )
);

// console.log(repeat_4_4_4_2<string>("a", 5)); // エラー
