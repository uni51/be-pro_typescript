function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}
const uhyokey: "user:uhyo" = makeKey("uhyo");

function fromKey<T extends string>(key: `user:${T}`) {
  return key.slice(5) as T;
}
const user = fromKey("user:uhyo"); // uhyo型
