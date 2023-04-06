type MysteryFunc = ((str: string) => string) | ((str: string) => number);

function userFunc(func: MysteryFunc) {
  const result = func("uhyo"); // string | number
  console.log(result);
}
