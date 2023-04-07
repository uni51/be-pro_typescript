function isStringOrNumber_6_7_2_1(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

const something_6_7_2_1: unknown = 123;

if (isStringOrNumber_6_7_2_1(something_6_7_2_1)) {
  // ここではsomethingは string | number 型
  console.log(something_6_7_2_1.toString());
}
