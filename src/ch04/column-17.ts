type HasName3 = {
  name: string;
};

type HasNameAndAge3 = {
  name: string;
  age: number;
};

type Obj = {
  func: (arg: HasName3) => string;
  method(arg: HasName3): string;
};

const something: Obj = {
  func: (user) => user.name,
  method: (user) => user.name,
};

const getAge = (user: HasNameAndAge3) => String(user.age);

// something.func = getAge; // エラー
something.method = getAge;
