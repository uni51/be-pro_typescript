type Option_6_8_6<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function mapOption<T, U>(
  obj: Option_6_8_6<T>,
  callback: (value: T) => U
): Option_6_8_6<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}

function doubleOption(obj: Option_6_8_6<number>) {
  return mapOption(obj, (x) => x * 2);
}
const four: Option_6_8_6<number> = { tag: "some", value: 4 };
const nothing: Option_6_8_6<number> = { tag: "none" };

console.log(doubleOption(four)); // { tag: "some", value: 8 }
console.log(doubleOption(nothing)); // { tag: "none" }
