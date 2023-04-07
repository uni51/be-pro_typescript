type Human_6_7_2_3 = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman_6_7_2_3(value: any): value is Human_6_7_2_3 {
  // プロパティアクセスできない可能性を排除
  if (value == null) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}
