type User_5_6_1 = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User_5_6_1 {
  if (name === "") {
    throw new Error("名前は空にできません");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: User_5_6_1, message: string): string {
  return `${user.name} (${user.age}) 「${message}」`;
}

const uhyo_5_6_1 = createUser("uhyo", 26);
console.log(getMessage(uhyo_5_6_1, "こんにちは"));
