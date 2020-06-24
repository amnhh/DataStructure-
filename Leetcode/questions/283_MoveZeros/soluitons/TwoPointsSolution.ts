/**
 * @title 双指针法
 *
 * @index 1
 *
 * @trainOfThought
 * 一个指针负责维护当前的非0的最大索引，另一个指针负责维护遍历到的索引
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
import { swap } from '../../../../share/utils/lang';

export default function TwoPointsSolution (nums: number[]): number[] {
    // i: 不为 0 的最大索引
    // j: 遍历索引
    let i: number = 0, j: number = 0
    while (j < nums.length) {
        if (nums[j] !== 0) {
            swap(nums, j, i ++)
        }
        j ++
    }
    return nums
}
