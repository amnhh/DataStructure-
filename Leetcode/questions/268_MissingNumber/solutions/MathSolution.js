"use strict";
/**
 * @title 数学计算
 *
 * @index 3
 *
 * @trainOfThought
 * 可以直接求和 1-n 的和，然后减去入参数组的和，得到的就是我们想要的值
 *
 * @complexAnalysis
 * O(n)
 *
 * @type 数学解
 *
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 T ，内存消耗击败 T
 */
exports.__esModule = true;
function MathSolution(nums) {
    var len = nums.length;
    var numsExpectedSummary = (1 + len) * len / 2;
    var numsActuallySummary = 0;
    for (var i = 0; i < len; i++) {
        numsActuallySummary += nums[i];
    }
    return numsExpectedSummary - numsActuallySummary;
}
exports["default"] = MathSolution;
