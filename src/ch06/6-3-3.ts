type Animal_6_3_3 = {
  tag: "animal";
  species: string;
};
type Human_6_3_3 = {
  tag: "human";
  name: string;
};
type User_6_3_3 = Animal_6_3_3 | Human_6_3_3;

function getUserName_6_3_3(user: User_6_3_3) {
  if (user.tag === "human") {
    // ここではuserはHuman型
    return user.name;
  } else {
    // ここではuserはAnimal型
    return "名無し";
  }
}

const tama_6_3_3: User_6_3_3 = {
  tag: "animal",
  species: "Felis silvestris catus",
};
const uhyo_6_3_3: User_6_3_3 = {
  tag: "human",
  name: "uhyo",
};

console.log(getUserName_6_3_3(tama_6_3_3)); // 名無し
console.log(getUserName_6_3_3(uhyo_6_3_3)); // uhyo
