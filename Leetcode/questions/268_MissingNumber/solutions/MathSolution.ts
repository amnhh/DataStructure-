/**
 * @title 数学计算
 *
 * @index 3
 *
 * @trainOfThought
 * 可以直接求和 1-n 的和，然后减去入参数组的和，得到的就是我们想要的值
 *
 * @complexAnalysis
 * O(n)
 *
 * @type 数学解
 *
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 92.75% ，内存消耗击败 30.00%
 */

export default function MathSolution (nums: Array<number>): number {
    const len = nums.length
    const numsExpectedSummary: number = (1 + len) * len / 2
    let numsActuallySummary: number = 0
    for (let i: number = 0; i < len; i ++) {
        numsActuallySummary += nums[i]
    }
    return numsExpectedSummary - numsActuallySummary
}
