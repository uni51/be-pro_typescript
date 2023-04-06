type Human_6_1_6 = {
  name: string;
  age: number;
};

function useMaybeHuman(human: Human_6_1_6 | undefined) {
  const age = human?.age; // number | undefined
  console.log(age);
}
