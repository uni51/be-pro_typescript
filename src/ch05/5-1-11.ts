class User_5_1_11<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo5_1_11 = new User_5_1_11<string>("uhyo", 26, "追加データ");
const data_5_1_11 = uhyo5_1_11.data;

const john_5_1_11 = new User_5_1_11("uhyo", 26, { num: 123 });
const data_5_1_11_2 = john_5_1_11.data;
