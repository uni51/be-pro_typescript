type Animal_6_1_3 = {
  species: string;
  age: number;
};

type Human_6_1_3 = Animal_6_1_3 & {
  name: string;
};

const tama_6_1_3: Animal_6_1_3 = {
  species: "Felis silverstris catus",
  age: 3,
};

const uhyo_6_1_3: Human_6_1_3 = {
  species: "Homo sapiens sapiens",
  age: 26,
  name: "uhyo",
};
