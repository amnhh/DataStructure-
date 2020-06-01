"use strict";
/**
 * @title 使用 JS 内置的数据结构 Set
 *
 * @index 2
 *
 * @trainOfThought
 * 使用 es6 新给的 Set 这种数据结构，借助它的永不重复的特性，进行比对
 *
 * @complexAnalysis 复杂度分析
 * 空间复杂度 O(n), 时间复杂度 O(n)
 *
 * @type Other
 *
 * @note
 *
 * @remark
 *
 * @category
 */
exports.__esModule = true;
function SetSizeSolution(nums) {
    return new Set(nums).size < nums.length;
}
exports["default"] = SetSizeSolution;
