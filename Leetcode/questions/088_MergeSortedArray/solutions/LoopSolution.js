"use strict";
/**
 * @title 正常解法
 *
 * @index 1
 *
 * @trainOfThought
 *  首先思考从前向后赋值，会发生 nums1 中数据的丢失
 *  所以这里考虑从后向前赋值，并且按住 n 这个变量，只考虑 m
 *  如果 m 归零，则说明 nums1 消费完，则直接全量从 nums2 中取
 *  否则即是正常的对比逻辑
 *  因为按住的是 n，所以
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
function LoopSolution(nums1, m, nums2, n) {
    var last = m + n - 1;
    while (n) {
        if (m == 0 || nums1[m - 1] <= nums2[n - 1]) {
            nums1[last--] = nums2[--n];
        }
        else {
            nums1[last--] = nums1[--m];
        }
    }
}
exports["default"] = LoopSolution;
