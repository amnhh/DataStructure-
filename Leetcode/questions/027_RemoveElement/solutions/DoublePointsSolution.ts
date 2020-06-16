/**
 * @title
 *  双指针法
 *
 * @index
 *  1
 *
 * @trainOfThought
 *  维护一个 i 用来标识当前不重复的最后一个索引，维护一个 j 连做遍历器
 *  遇到 j === val 则跳过，否则写入 i 这个坑位，i 自增
 *
 * @complexAnalysis
 *  空间复杂度: i, j 两个变量 ~  O(2) => O(1)
 *  时间复杂度: j 最多执行 n 次便会停止 ~ O(n)
 *
 * @type
 *  双指针
 *  快慢指针
 *
 * @category
 *  Array
 *
 * @score 时间、内存消耗得分
 * 执行用时68 ms击败 68.65% ，内存消耗32.9 MB击败 100.00%
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
