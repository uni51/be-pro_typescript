function createUser_5_6_3(name: string, age: number) {
  return (message: string) => {
    return `${name} (${age}) 「${message}」`;
  };
}

const greetMessage = createUser_5_6_3("uhyo", 26);
console.log(greetMessage("こんにちは"));
