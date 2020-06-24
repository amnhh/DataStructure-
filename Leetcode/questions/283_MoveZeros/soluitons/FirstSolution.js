"use strict";
/**
 * @title 普通解法
 *
 * @index 1
 *
 * @trainOfThought
 * 维护两个指针i和j，分别代表「当前不为0序列的最大索引」和「当前遍历到的值」
 * 遍历结束后，则有 [0, ... i) 均不为 0，为该问题的循环不变式
 *
 * @complexAnalysis 复杂度分析
 * 时间 O(2n) => O(n)
 *
 * @type 普通遍历解法
 *
 * @score 时间、内存消耗得分
 * 执行用时88 ms击败 26.40% ，内存消耗37.3 MB击败 5.55%
 */
exports.__esModule = true;
function FirstSolution(nums) {
    // 保证 [0, ...i) 均不为 0
    var i = 0;
    // 遍历时的索引值
    var j = 0;
    while (j < nums.length) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    for (; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}
exports["default"] = FirstSolution;
