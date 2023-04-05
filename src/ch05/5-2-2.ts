class User_5_2_2 {
  name: string = "";
  age: number = 0;
}

type MyUserConstructor = new () => User_5_2_2;

const MyUser: MyUserConstructor = User_5_2_2;

const u = new MyUser();

console.log(u.name, u.age);
