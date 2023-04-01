type Animal_3_4_4 = {
  name: string;
};

type Family_3_4_4<Parent = Animal_3_4_4, Child = Animal_3_4_4> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type S = Family_3_4_4<string, string>;
type T_3_4_4 = Family_3_4_4;
type U = Family_3_4_4<string>;
