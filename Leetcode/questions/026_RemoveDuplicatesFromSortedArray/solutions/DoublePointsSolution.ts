/**
 * @title
 *  双指针解法
 *
 * @index
 *  1
 *
 * @trainOfThought
 *  使用 i 维护不重复序列的最后一个值，使用 j 维护当前正在比对的值
 *  终止条件为 j 到了数组的最后，依据题的意思，在最后时切断数组的长度为 i + 1
 *  并返回这个长度
 *
 * @complexAnalysis
 *  空间复杂度: 使用了两个临时变量：O(2) => O(1)
 *  时间复杂度: 每次 j 都会增加，最多到 n 次：O(n)
 *
 * @type
 *  快慢指针
 *  双指针法
 *
 * @category
 *  数组
 *
 * @score 时间、内存消耗得分
 *  执行用时80 ms击败 90.8% ，内存消耗38.4 MB击败 6.35%
 */

export default function DoublePointsSolution (nums: number[]): number {
    let i: number = 0,
        j: number = 1

    while (j < nums.length) {
        if (nums[i] === nums[j]) j ++
        else nums[++i] = nums[j ++]
    }

    nums.length = i + 1
    return nums.length
}
