/**
 * 二分查找
 * @param nums 待查找元素所在的数组
 * @param target 待查找的元素
 * @constructor
 */
function BinarySearch(nums, target) {
    // [l, mid)
    var l = 0, 
    // (mid, right]
    r = nums.length - 1;
    // [mid]
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (target === nums[mid])
            return mid;
        if (target < nums[mid]) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return -1;
}
