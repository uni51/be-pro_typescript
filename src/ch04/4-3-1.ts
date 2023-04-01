type HasName = {
  name: string;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age,
});

const f_4_3_1: (age: number) => HasName = fromAge;

const obj_4_3_1: HasName = f_4_3_1(100);
console.log(obj_4_3_1); // { name: 'John Smith', age: 100 }
