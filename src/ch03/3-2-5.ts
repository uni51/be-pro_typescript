type PriceData = {
  [key: string]: number;
};

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
};

data.chiken = 250;
// data.弁当 = "foo"; // エラー
