type HasName_5_3_5 = {
  name: string;
};

class User_5_3_5 implements HasName_5_3_5 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
