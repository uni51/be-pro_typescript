function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Human_6_4_4 = {
  name: string;
  age: number;
};

const uhyo_6_4_4: Human_6_4_4 = {
  name: "uhyo",
  age: 26,
};

// uhyoNameはstring型
const uhyoName = get(uhyo_6_4_4, "name");
// uhyoAgeはnumber型
const uhyoAge = get(uhyo_6_4_4, "age");
