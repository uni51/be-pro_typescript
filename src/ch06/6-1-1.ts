type Animal_6_1_1 = {
  species: string;
};

type Human_6_1_1 = {
  name: string;
};

type User_6_1_1 = Animal_6_1_1 | Human_6_1_1;

const tama_6_1_1: User_6_1_1 = {
  species: "Felis silverstris catus",
};

const uhyo_6_1_1: User_6_1_1 = {
  name: "uhyo",
};
