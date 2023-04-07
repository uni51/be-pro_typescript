type NumberAndStrings_6_7_3_1 = [number, ...string[]];

// これらはOK
const arr1_6_7_3_1: NumberAndStrings_6_7_3_1 = [25, "uhyo", "hyo", "hyo"];
const arr2_6_7_3_1: NumberAndStrings_6_7_3_1 = [25];
// これらはコンパイルエラー
// const arr3_6_7_3_1: NumberAndStrings_6_7_3_1 = ["uhyo", "hyo"];
// const arr4_6_7_3_1: NumberAndStrings_6_7_3_1 = [25, 26, 27];
// const arr5_6_7_3_1: NumberAndStrings_6_7_3_1 = [];
