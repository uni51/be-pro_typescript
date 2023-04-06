type Animal_6_1_2 = {
  species: string;
  age: string;
};

type Human_6_1_2 = {
  name: string;
  age: number;
};

type User_6_1_2 = Animal_6_1_2 | Human_6_1_2;

const tama_6_1_2: User_6_1_2 = {
  species: "Felis silverstris catus",
  age: "永遠の17歳",
};

const uhyo_6_1_2: User_6_1_2 = {
  name: "uhyo",
  age: 26,
};

function showAge(user: User_6_1_2) {
  const age = user.age; // string | number
  console.log(age);
}
