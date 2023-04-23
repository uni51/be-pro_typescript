type Option_6_8_1<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function showNumberIfExists(obj: Option_6_8_1<number>): void {
  if (obj.tag === "some") {
    console.log(obj.value);
  }
}

const four_6_8_1: Option_6_8_1<number> = {
  tag: "some",
  value: 4,
};

const nothing_6_8_1: Option_6_8_1<number> = {
  tag: "none",
};

showNumberIfExists(four_6_8_1); // 4 が表示される
showNumberIfExists(nothing_6_8_1); // 何も表示されない
