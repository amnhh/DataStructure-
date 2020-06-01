/**
 * 插入排序的递归版本
 * @param nums
 */
export default function insertSortRecursion (nums: Array<number>): Array<number> {
    walk(nums, nums.length - 1)
    debugger
    return nums
}

function walk (nums: Array<number>, end: number) {
    if (end === 0) return
    walk(nums, end - 1)
    let key = nums[end],
        i = key - 1
    while (i > 0 && key > nums[i]) {
        nums[i + 1] = nums[i]
        i --
    }
    nums[i + 1] = key
}
