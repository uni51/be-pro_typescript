class User_5_4_2 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filterOlder(users: readonly User_5_4_2[]): User_5_4_2[] {
    return users.filter((u) => u.#age > this.#age);
  }
}

const uhyo_5_4_2 = new User_5_4_2("uhyo", 25);
const john_5_4_2 = new User_5_4_2("John Smith", 15);
const bob_5_4_2 = new User_5_4_2("Bob", 40);

const older = uhyo_5_4_2.filterOlder([john_5_4_2, bob_5_4_2]);
console.log(older); // [ User_5_4_2 { name: 'Bob' } ]
