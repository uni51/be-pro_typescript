type HasToString_6_7_2 = {
  toString: () => string;
};

function useToString2_6_7_2(value: HasToString_6_7_2 & object) {
  console.log(`value is ${value.toString()}`);
}

// "value is foo!" と表示される
useToString2_6_7_2({
  toString() {
    return "foo!";
  },
});

// エラー: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
//          Type 'number' is not assignable to type 'object'.
// useToString2_6_7_2(3.14);
