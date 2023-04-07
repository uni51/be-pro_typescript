type Human_6_4_2_1 = {
  name: string;
  age: number;
};

type HumanKeys = keyof Human_6_4_2_1;

let key: HumanKeys = "name";
key = "age";
// エラー: Type '"hoge"' is not assignable to type 'keyof Human'.
// key = "hoge";
