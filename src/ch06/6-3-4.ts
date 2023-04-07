type Animal_6_3_4 = {
  tag: "animal";
  species: string;
};
type Human_6_3_4 = {
  tag: "human";
  name: string;
};
type User_6_3_4 = Animal_6_3_4 | Human_6_3_4;

function getUserName_6_3_4(user: User_6_3_4) {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
  }
}

const tama_6_3_4: User_6_3_4 = {
  tag: "animal",
  species: "Felis silvestris catus",
};
const uhyo_6_3_4: User_6_3_4 = {
  tag: "human",
  name: "uhyo",
};

console.log(getUserName_6_3_4(tama_6_3_4)); // 名無し
console.log(getUserName_6_3_4(uhyo_6_3_4)); // uhyo
