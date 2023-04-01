type Family_3_4_1<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj_3_4_1: Family_3_4_1<number, string> = {
  mother: 0,
  father: 100,
  child: "1000",
};
