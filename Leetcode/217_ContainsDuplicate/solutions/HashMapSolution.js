"use strict";
/**
 * @title HashMap 解法
 *
 * @index 1
 *
 * @trainOfThought
 *  在外建立一个 HashMap，用于
 *  遍历数组时，先考证是否在 HashMap 中存在当前值，如果有则说明有重复的元素，返回 true
 *  如果 HashMap 中没有当前值, 则向 HashMap 中写入当前值
 *  遍历结束时，说明没有重复的元素，返回 false
 *
 * @complexAnalysis
 *  时间 O(n) + 空间 O(n)
 *  这也是这种解法的缺陷之一，使用了额外的数据结构 HashMap，解法的时间复杂度低很大程度上取决于 HashMap 取某个 key 对应的值的时候复杂度为 O(1)
 *
 * @type HashMap
 *
 * @note
 *
 * @remark
 *
 * @category
 */
exports.__esModule = true;
function HashMapSolution(nums) {
    var HashMap = {};
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];
        if (!HashMap[current])
            HashMap[current] = true;
        else
            return true;
    }
    return false;
}
exports["default"] = HashMapSolution;
