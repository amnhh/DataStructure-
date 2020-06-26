"use strict";
/**
 * @title 三路快排
 *
 * @index 1
 *
 * @trainOfThought
 * 设置三个区间分别为：[0, zero]、[zero, two]、[two, nums.length - 1]
 * 分别代表 0、1、2所在的区间
 * 循环中保证两个循环不变式：
 *  1. [0, zero] 的元素永远等于 0
 *  2. 【two, nums.length - 1】 的元素永远为 2
 * 同时维护一个遍历的索引 i，则有：
 * i 为 1 时，无关 zero 和 two ，直接 i++
 * i 为 2 时，将 two - 1 的位置与 i 的位置交换，并修正 two 的位置
 * i 为 0 时，因为 zero + 1 的位置为 1，所以二者交换后修正 i 和 zero 即可
 * 应在 i === two 时跳出, 所以终止条件为 i < two
 *
 * @complexAnalysis
 * 只有一次循环，所以时间复杂度：O(n)
 * 使用了三个变量，所以空间复杂度：O(3) => O(1)
 *
 * @score 时间、内存消耗得分
 * 执行用时72 ms击败 54.09% ，内存消耗32.7 MB击败 100.00%
 */
exports.__esModule = true;
function swap(list, idx1, idx2) {
    var tmp = list[idx1];
    list[idx1] = list[idx2];
    list[idx2] = tmp;
}
function SecondSolution(nums) {
    // [0, ..., zero] 的值均为 0
    var zero = -1, 
    // [two, ... nums.length - 1] 均为 2
    two = nums.length, i = 0;
    while (i < two) {
        // 如果当前值为 1，则自增 i
        if (nums[i] === 1) {
            i++;
            continue;
        }
        // 如果当前值为 0，则取 zero + 1 位于 i 位交换
        // 通过我们对 zero 和 i 的定义可以知道，zero + 1 位一定为 1
        // 所以交换后我们同时归位了 zero + 1 位的 0 和 i 位的 1
        // 所以 zero 和 i 共同后移一位
        if (nums[i] === 0) {
            zero++;
            swap(nums, zero, i);
            i++;
            continue;
        }
        // 如果说当前值为 2，则可以直接与 two - 1 位交换位置，此时 two - 1 位为 2，i 位等待后续的判断即可
        // two - 1 位置为 2，则 two - 1 位合法，依据 two 的定义将 two - 1 位置为当前的 two
        if (nums[i] === 2) {
            two--;
            swap(nums, two, i);
        }
    }
    return nums;
}
exports["default"] = SecondSolution;
