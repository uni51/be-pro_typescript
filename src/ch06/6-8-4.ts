type Option_6_8_4<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function showNumberIfExists_6_8_4(obj: Option_6_8_4<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

function isSome<T>(obj: Option_6_8_4<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

const four_6_8_4: Option_6_8_4<number> = {
  tag: "some",
  value: 4,
};

const nothing_6_8_4: Option_6_8_4<number> = {
  tag: "none",
};

showNumberIfExists_6_8_4(four_6_8_4); // 4 が表示される
showNumberIfExists_6_8_4(nothing_6_8_4); // 何も表示されない
