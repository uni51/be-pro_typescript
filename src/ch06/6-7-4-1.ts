type Fruit_6_7_4_1 = "apple" | "orange" | "strawberry";

// FruitNumbers は {
//     apple: number;
//     orange: number;
//     strawberry: number;
// } 型
type FruitNumbers_6_7_4_1 = {
  [P in Fruit_6_7_4_1]: number;
};

const numbers_6_7_4_1: FruitNumbers_6_7_4_1 = {
  apple: 3,
  orange: 10,
  strawberry: 20,
};
