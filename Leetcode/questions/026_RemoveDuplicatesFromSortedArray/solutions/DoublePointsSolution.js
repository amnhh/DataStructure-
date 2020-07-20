"use strict";
/**
 * @title 双指针解法
 *
 * @index 1
 *
 * @trainOfThought
 *  使用 i 维护不重复序列的最后一个值，使用 j 维护当前正在比对的值
 *  终止掉件为 j 到了数组的最后，依据题的意思，在最后时切断数组的长度为 i + 1,
 *
 * @complexAnalysis 复杂度分析
 *
 * @type 解法类型
 *
 * @note 笔记
 *
 * @remark 备注
 *
 * @category 想要分配到哪个大类下
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 T ，内存消耗击败 T
 */
exports.__esModule = true;
function DoublePointsSolution(nums) {
    var i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j])
            j++;
        else
            nums[++i] = nums[j++];
    }
    nums.length = i + 1;
    return nums.length;
}
exports["default"] = DoublePointsSolution;
