"use strict";
/**
 * @title 排序后对比
 *
 * @index 3
 *
 * @trainOfThought
 * 将原数组排序而后遍历，遍历得到相邻两位相同时，则返回 true
 * 遍历结束都一直不同，则返回 false
 *
 * @complexAnalysis
 * 排序操作最低为 O(n * logn),而后遍历一次为 O(n)
 * 所以总时间复杂度为 O(n * logn + n) => O(n * logn)
 *
 * @type 排序后解题
 *
 * @note
 * 无序的数组的方法比较有限，如果说已知 O(n^2) 不能解决的话，可以尝试先排序后使用有序数组的一些常见方式，如 二分法 ....
 * 之类的来进行处理
 *
 * @remark 备注
 *
 * @category 想要分配到哪个大类下
 */
exports.__esModule = true;
function ReorderSolution(nums) {
    nums.sort(function (v1, v2) { return v1 - v2; });
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            return true;
    }
    return false;
}
exports["default"] = ReorderSolution;
