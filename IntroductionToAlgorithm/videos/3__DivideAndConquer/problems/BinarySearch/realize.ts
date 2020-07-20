/**
 * 二分查找
 * @param nums 待查找元素所在的数组
 * @param target 待查找的元素
 * @constructor
 */
function BinarySearch (nums: number[], target: number): number {
    // [l, mid)
    let l = 0,
        // (mid, right]
        r = nums.length - 1
        // [mid]

    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (target === nums[mid]) return mid
        if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return -1
}
