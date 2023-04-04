function repeat_4_4_3<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

const result_4_4_3 = repeat_4_4_3("a", 5);
