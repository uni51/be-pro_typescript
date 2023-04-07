// toStringを持つ値の型
type HasToString_6_7_1 = {
  toString: () => string;
};

function useToString1_6_7_1(value: HasToString_6_7_1) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!" と表示される
useToString1_6_7_1({
  toString() {
    return "foo!";
  },
});

// "value is 3.14" と表示される
useToString1_6_7_1(3.14);
