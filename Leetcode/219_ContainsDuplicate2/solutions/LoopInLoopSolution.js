"use strict";
/**
 * @title 二重循环解法
 *
 * @index 1
 *
 * @trainOfThought
 * 循环嵌套循环去寻找两个相等的元素，找到时，再比对下两者的索引是否小于 k。
 * 若小于，则返回 true
 * 若不小于，则继续寻找
 * 最终返回 false
 *
 * @complexAnalysis O(n^2)
 *
 * @type 暴力解法
 *
 * @category 想要分配到哪个大类下
 */
exports.__esModule = true;
function LoopInLoopSolution(nums, key) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && j - i <= key)
                return true;
        }
    }
    return false;
}
exports["default"] = LoopInLoopSolution;
