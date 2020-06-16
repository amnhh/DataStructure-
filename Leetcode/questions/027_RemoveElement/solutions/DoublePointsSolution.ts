/**
 * @title 标题
 *
 * @index 次序
 *
 * @trainOfThought 思路
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

export default function DoublePointsSolution (nums: number[], val: number): number {
    let i: number = 0,
        j: number = 0

    while (j < nums.length) {
        if (nums[j] === val) j ++
        else nums[i++] = nums[j ++]
    }

    nums.length = i
    return i
}
