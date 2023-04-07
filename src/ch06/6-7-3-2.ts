type NumberStringNumber_6_7_3_2 = [number, ...string[], number];

// これらはOK
const arr1: NumberStringNumber_6_7_3_2 = [25, "uhyo", "hyo", 0];
const arr2: NumberStringNumber_6_7_3_2 = [25, 25];
// これらはコンパイルエラー
// const arr3: NumberStringNumber_6_7_3_2 = [25, "uhyo", "hyo", "hyo"];
// const arr4: NumberStringNumber_6_7_3_2 = [];
// const arr5: NumberStringNumber_6_7_3_2 = ["uhyo", "hyo", 25];
// const arr6: NumberStringNumber_6_7_3_2 = [25, "uhyo", 25, "hyo"];
