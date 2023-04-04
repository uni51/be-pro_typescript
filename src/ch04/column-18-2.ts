function fillZero(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const nums3: number[] = [1, 10, 100];
fillZero(nums3);
console.log(nums3);

const nums4: readonly number[] = [1, 1, 2, 3, 5, 8];
// fillZero(nums4); // エラー
// console.log(nums4);
