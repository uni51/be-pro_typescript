type HasName2 = {
  name: string;
};

type HasNameAndAge2 = {
  name: string;
  age: number;
};

const showName = (obj: HasName2) => {
  console.log(obj.name);
};

const g: (obj: HasNameAndAge2) => void = showName;

g({
  name: "uhyo",
  age: 26,
});
