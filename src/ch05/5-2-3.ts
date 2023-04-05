type HasAge_5_2_3 = {
  age: number;
};

class User_5_2_3 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function getPrice(customer: HasAge_5_2_3) {
  if (customer instanceof User_5_2_3) {
    if (customer.name === "uhyo") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
}

const customer1: HasAge_5_2_3 = { age: 15 };
const customer2: HasAge_5_2_3 = { age: 40 };
const uhyo = new User_5_2_3("uhyo", 26);

console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo));
