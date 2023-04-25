const names = ["uhyo", "John", "Taro"] as const;
// type temp = typeof names; // readonly ["uhyo", "John", "Taro"]
// type Name = "uhyo" | "John" | "Taro"
type Name = (typeof names)[number];
