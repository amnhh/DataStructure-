/**
 * @title 特征方法
 *
 * @index 1
 *
 * @trainOfThought
 * 思考我们前面的解法，其实只是穷举了所有 i 和 j 的组合。此时我们再次审题：如果出现 nums[i] === nums[j] 且 |i - j| <= k
 * 所以符合条件的 i 和 j 是有条件的：j - i <= k，我们可以只寻找当前的 i 下合法的 j，其他的不需要考虑
 *
 * @complexAnalysis O((n - k) * k) => O(n)
 *
 * @note
 * 一般情况下 O(n^2) 都需要我们去尽力的找到条件里的变量的联系，充分的使用条件是我们降低复杂度幂次的关键
 *
 * @score
 * 执行用时击败 6.48%, 内存消耗击败 100%
 * 没想到竟然会比两重循环还慢？？？？
 */

export default function SliderSolution (nums: Array<number>, k: number) {
    const len = nums.length

    for (let i: number = 0; i < len; i ++) {
        let _k: number = Math.min(k, len - i)
        while (_k) {
            if (nums[i] === nums[i + _k --]) return true
        }
    }
    return false

}
