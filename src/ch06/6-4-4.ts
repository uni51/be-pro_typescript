type Obj_6_4_4 = {
  0: string;
  1: number;
};

const obj: Obj_6_4_4 = {
  0: "uhyo",
  "1": 26,
};

obj["0"] = "john";
obj[1] = 15;

// ObjKeys は 0 | 1 型
type ObjKeys = keyof Obj_6_4_4;
