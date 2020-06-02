/**
 * @title
 * 对照数组
 *
 * @index 1
 *
 * @trainOfThought
 * 创建一个长度为 n + 1 的对照数组，遍历原数组，依次放入对照数组中
 * 遍历对照数组，缺省处即为返回值
 *
 * @complexAnalysis
 * O(2n) 时间复杂度 + O(n + 1) 空间复杂度
 *
 * @type
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 92.75%，内存消耗击败 20.00%
 */

export default function DuplicateArraySolution (nums: Array<number>): number {
    const len = nums.length
    const helperArr: Array<number> = new Array<number>(len + 1)

    for (let i: number = 0; i < len; i ++) {
        helperArr[nums[i]] = nums[i]
    }

    for (let i: number = 0; i < helperArr.length; i ++) {
        if (helperArr[i] === undefined) return i
    }
    return -1
}
