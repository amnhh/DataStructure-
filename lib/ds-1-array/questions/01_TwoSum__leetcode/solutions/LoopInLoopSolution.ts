/**
 * @title 两次循环求解
 *
 * @index 1
 *
 * @trainOfThought
 *  两个数字和为 target, 则使用两次循环一定可以得到对应解
 *
 * @complex 时间 O(n^2)
 *
 * @type NestLooping
 */

export default function LoopInLoopSolution (nums: Array<number>, target: number): Array<number> {
    // 外层从 0 开始遍历
    for (let i: number = 0; i < nums.length; i ++) {
        // 内层从 i + 1 开始遍历
        for (let j: number = i + 1; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return []
}
