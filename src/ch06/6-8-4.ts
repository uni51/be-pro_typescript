type Option_6_8_4<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function isSome<T>(obj: Option_6_8_4<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}
