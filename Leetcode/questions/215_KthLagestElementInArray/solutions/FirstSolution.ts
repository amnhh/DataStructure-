/**
 * @title 排序后取值
 *
 * @index 1
 *
 * @trainOfThought
 * 对原数组直接排序，排序后选取第 k 大的元素
 *
 * @complexAnalysis
 * 时间复杂度取决于排序的时间复杂度，为 O(nlogn)
 * 空间复杂度 O(1)
 *
 * @score 时间、内存消耗得分
 * 执行用时68 ms击败 96.80% ，内存消耗35.9 MB击败 20.00%
 */

export default function FirstSolution (nums: number[], k: number): number {
    nums = nums.sort((v1, v2) => v2 - v1)
    return nums[k - 1]
}
