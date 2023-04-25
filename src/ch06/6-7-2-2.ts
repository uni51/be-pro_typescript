function isStringOrNumber_6_7_2_2(value: unknown): boolean {
  return typeof value === "string" || typeof value === "number";
}

const something_6_7_2_2: unknown = 123;

if (isStringOrNumber_6_7_2_2(something_6_7_2_2)) {
  // エラー: 'something_6_7_2_2''は 'unknown' 型です
  // console.log(something_6_7_2_2.toString());
}
