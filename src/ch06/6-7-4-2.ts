type Fruit_6_7_4_2 = "apple" | "orange" | "strawberry";

// FruitArrays は {
//     apple: "apple"[];
//     orange: "orange"[];
//     strawberry: "strawberry"[];
// } 型
type FruitArrays_6_7_4_2 = {
  [P in Fruit_6_7_4_2]: P[];
};

const numbers: FruitArrays_6_7_4_2 = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: [],
};
