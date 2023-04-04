function sum(nums: readonly number[]): number {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

const nums1: readonly number[] = [1, 10, 100];
console.log(sum(nums1));

const nums2: number[] = [1, 1, 2, 3, 5, 8];
console.log(sum(nums2));
