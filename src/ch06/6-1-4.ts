type Human_6_1_4 = { name: string };
type Animal_6_1_4 = { species: string };

function getName(human: Human_6_1_4) {
  return human.name;
}

function getSpecies(animal: Animal_6_1_4) {
  return animal.species;
}

//  ((human: Human_6_1_4) => string) | ((animal: Animal_6_1_4) => string)
const mysteryFunc_6_1_4 = Math.random() < 0.5 ? getName : getSpecies;

const uhyo_6_1_4: Human_6_1_4 & Animal_6_1_4 = {
  name: "uhyo",
  species: "Homo sapiens sapiens",
};

const value = mysteryFunc_6_1_4(uhyo_6_1_4);
console.log(value);
