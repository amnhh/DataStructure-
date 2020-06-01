/**
 * @title 二重循环解法
 *
 * @index 1
 *
 * @trainOfThought
 * 循环嵌套循环去寻找两个相等的元素，找到时，再比对下两者的索引是否小于 k。
 * 若小于，则返回 true
 * 若不小于，则继续寻找
 * 最终返回 false
 *
 * @complexAnalysis O(n^2)
 *
 * @type 暴力解法
 *
 * @score
 * 执行用时击败 27.91%, 内存消耗击败 100%
 */

export default function LoopInLoopSolution (nums: Array<number>, key: number): boolean {
    for (let i: number = 0; i < nums.length; i ++) {
        for (let j: number = i + 1; j < nums.length; j ++) {
            if (nums[i] === nums[j] && j - i <= key) return true
        }
    }
    return false
}
