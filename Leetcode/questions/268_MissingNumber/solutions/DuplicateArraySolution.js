"use strict";
/**
 * @title
 * 对照数组
 *
 * @index 1
 *
 * @trainOfThought
 * 创建一个长度为 n + 1 的对照数组，遍历原数组，依次放入对照数组中
 * 遍历对照数组，缺省处即为返回值
 *
 * @complexAnalysis
 * O(2n) 时间复杂度 + O(n + 1) 空间复杂度
 *
 * @type
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 T ，内存消耗击败 T
 */
exports.__esModule = true;
function DuplicateArraySolution(nums) {
    var len = nums.length;
    var helperArr = new Array(len + 1);
    for (var i = 0; i < len; i++) {
        helperArr[nums[i]] = nums[i];
    }
    for (var i = 0; i < helperArr.length; i++) {
        if (helperArr[i] === undefined)
            return i;
    }
    return -1;
}
exports["default"] = DuplicateArraySolution;
