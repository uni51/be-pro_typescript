class User_5_6_2 {
  readonly #name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }
    this.#name = name;
    this.#age = age;
  }

  getMessage(message: string): string {
    return `${this.#name} (${this.#age}) 「${message}」`;
  }
}

const uhyo_5_6_2 = new User_5_6_2("uhyo", 26);
console.log(uhyo_5_6_2.getMessage("こんにちは"));
