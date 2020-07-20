"use strict";
/**
 * @title 快排思路解法
 *
 * @index 1
 *
 * @trainOfThought
 * 依据快排的思路，设置函数 partition, 函数中确定一个基准值和标记位，如果小于标记位则放在左侧，且右移标记位
 * 遍历结束后，将标记位和基准值对应起来，并返回标记位
 * 标记位的值，就是数组排序后的索引
 * 所以我们假设数组是排序后的，则有第 1 大的元素为 nums.length - 1 => 第 k 大的元素为 nums.length - k
 * 所以一旦 partition 返回的值为 nums.length - k, 此时 partition 返回的索引即为第 k 大的值对应的索引
 *
 * @complexAnalysis
 * 时间复杂度 O(n) ~ O(nlogn)
 * 空间复杂度 O(1)
 *
 * @type
 * 快排
 *
 * @score 时间、内存消耗得分
 * 执行用时64 ms击败 99.09% ，内存消耗35.7 MB击败 40.00%

 */
exports.__esModule = true;
function SecondSolution(nums, k) {
    function swap(list, idx1, idx2) {
        var tmp = list[idx1];
        list[idx1] = list[idx2];
        list[idx2] = tmp;
    }
    function partition(list, low, high) {
        if (high > low) {
            var random = Math.floor(Math.random() * (high - low)) + low;
            swap(list, random, high);
        }
        var i = low;
        var pivot = list[high];
        for (var j = low; j < high; j++) {
            // [low, i) 为已处理的区域，[i, high] 为未处理的区域
            if (list[j] < pivot) {
                swap(list, i++, j);
            }
        }
        // i 为分区点的坐标，而 list[high] 为分区点的值
        // 所以两者交换，使得 pivot 归位
        swap(list, i, high);
        return i;
    }
    var low = 0, high = nums.length - 1, targetIdx = nums.length - k;
    while (true) {
        var ret = partition(nums, low, high);
        if (ret === targetIdx) {
            return nums[ret];
        }
        else if (ret < targetIdx) {
            low = ret + 1;
        }
        else {
            high = ret - 1;
        }
    }
}
exports["default"] = SecondSolution;
