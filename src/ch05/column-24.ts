class RepeatArray<T> extends Array<T> {
  repaet(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();

    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

const arr = new RepeatArray(1, 2);
arr.push(3);
const repeated = arr.repaet(3);

console.log(repeated); // RepeatArray(9) [1, 2, 3, 1, 2, 3, 1, 2, 3]
