"use strict";
/**
 * @title 双指针+交换方法
 *
 * @index 2
 *
 * @trainOfThought
 * 维护两个指针 i 和 j，分别代表「当前不为0序列的最大索引」和「当前遍历到的值」
 * 则有 [0, i) 均为符合题意的循环不变式
 * 遍历到 j 位为 0 时，则继续向后走，j 自增1
 * 遍历到 j 位不为 0 时，则 j 和 i 交换位置，i 和 j 都自增 1
 *
 * @complexAnalysis 复杂度分析
 * 时间复杂度 O(n)
 *
 * @type 双指针法
 *
 * @score 时间、内存消耗得分
 * 执行用时80 ms击败 59.42% ，内存消耗37.3 MB击败 5.55%
 */
// import { swap } from '../../../../share/utils/lang';
exports.__esModule = true;
function SecondSolution(nums) {
    var i = 0, j = 0;
    var len = nums.length;
    while (j < len) {
        if (nums[j] === 0) {
            j++;
            continue;
        }
        // swap
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j++;
    }
    return nums;
}
exports["default"] = SecondSolution;
