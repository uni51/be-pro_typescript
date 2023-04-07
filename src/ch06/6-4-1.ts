type Human_6_4_1 = {
  type: "human";
  name: string;
  age: number;
};

function setAge_6_4_1(human: Human_6_4_1, age: Human_6_4_1["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo_6_4_1: Human_6_4_1 = {
  type: "human",
  name: "uhyo",
  age: 26,
};

const uhyo2_6_4_1 = setAge_6_4_1(uhyo_6_4_1, 27);
console.log(uhyo2_6_4_1); // { "type": "human", "name": "uhyo", "age": 27 } と表示される
