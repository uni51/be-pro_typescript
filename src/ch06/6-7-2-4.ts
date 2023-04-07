type Human_6_7_2_4 = {
  type: "Human";
  name: string;
  age: number;
};

function assertHuman_6_7_2_4(value: any): asserts value is Human_6_7_2_4 {
  // プロパティアクセスできない可能性を排除
  if (value == null) {
    throw new Error("Given value is null or undefined");
  }
  // 3つのプロパティの型を判定
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error("Given value is not a Human");
  }
}

function checkAndUseHuman(value: unknown) {
  assertHuman_6_7_2_4(value);
  // ここから下ではvalueがHuman型になる
  const name = value.name;
  // （略）
}
