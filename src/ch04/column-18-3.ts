type User_18_3 = { name: string };
type ReadonlyUser = { readonly name: string };

const uhyoify = (user: User_18_3) => {
  user.name = "uhyo";
};

const john: ReadonlyUser = {
  name: "John Smith",
};

// john.name = "Nanashi"; // エラー

uhyoify(john);

console.log(john.name); // uhyoと表示される
