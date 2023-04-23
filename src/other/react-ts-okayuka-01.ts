const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

type PermsChar = keyof typeof permissions; // "r" | "w" | "x"
type PermsNumTemp = typeof permissions;
/*
type PermsNumTemp = {
    r: 4;
    w: 2;
    x: 1;
}
*/
type PermsNum = PermsNumTemp[PermsChar]; // 4 | 2 | 1
// type PermsNum = typeof permissions[PermsChar]; // 4 | 2 | 1
