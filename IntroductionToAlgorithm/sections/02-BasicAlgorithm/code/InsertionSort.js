"use strict";
exports.__esModule = true;
/**
 * 插入排序
 * @param nums 待排序的数组
 */
function insertionSort(nums) {
    for (var j = 1; j < nums.length; j++) {
        // 取出当前值，以保证在后续的 while 循环中，该值不丢失
        var key = nums[j];
        var i = j - 1;
        while (i > 0 && nums[i] > key) {
            // 大于 key 的全部后移
            nums[i + 1] = nums[i];
            i--;
        }
        nums[i + 1] = key;
    }
    return nums;
}
exports["default"] = insertionSort;
