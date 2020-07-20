"use strict";
/**
 * @title 对撞指针解法
 *
 * @index 1
 *
 * @trainOfThought
 *  有序数组则返回的解一定为一左一右
 *  所以左右指针对撞
 *
 * @complexAnalysis
 *  时间：O(n)
 *  空间：O(2)
 *
 * @type
 *  对撞指针
 *
 * @score 时间、内存消耗得分
 * 执行用时72ms击败 66.00% ，内存消耗35.5 MB击败 10.00%
 */
exports.__esModule = true;
function BestSolution(numbers, target) {
    var i = 0, j = numbers.length - 1;
    while (i < j) {
        var current = numbers[i] + numbers[j];
        if (current === target)
            return [i + 1, j + 1];
        else if (current < target)
            i++;
        else
            j--;
    }
    return [];
}
exports["default"] = BestSolution;
