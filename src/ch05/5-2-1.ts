class User_5_2_1<T> {
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

const uhyo5_2_1: User_5_2_1<string> = new User_5_2_1("uhyo", 26, "追加データ");
