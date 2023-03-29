import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("文字列を入力してください:", (line) => {
//   // 文字列が入力されるとここが実行される
//   console.log(`${line} が入力されました`);
//   rl.close();
// });

rl.question("数値を入力してください:", (line) => {
  // 1000を足して出力
  console.log(line + 1000);
  rl.close();
});
