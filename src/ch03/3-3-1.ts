type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj_3_3_1: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
};

const obj_3_3_2: FooBar = obj_3_3_1;
