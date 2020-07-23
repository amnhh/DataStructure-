/**
 * @title 滑动窗口解法
 *
 * @index 1
 *
 * @trainOfThought
 * 维护一个窗口
 * 如果当前窗口已大于 s，则左守卫向前移动
 * 如果当前窗口小于s，则右守卫向前移动
 * 如果右守卫已到达最右，则直接移动左守卫，直至左守卫位置前于右守卫时，跳出循环
 *
 * @complexAnalysis
 * 时间：O(n)
 * 空间：O(1)
 *
 * @type 滑动窗口
 */

export default function FirstSolution (s: number, nums: number[]): number {
    // 返回值
    let result: undefined | number,
        // 滑动窗口的双指针
        i: number = 0, j: number = 0,
        // 当前窗口的数字的和
        sum: number = 0

    while (i <= j) {
        // 命中窗口左守卫向前的情况
        if (sum >= s) {
            // 如果 result 没值或者大于当前的窗口差值
            if (!result || result > j - i) {
                result = j - i
            }
            sum -= nums[i ++]
            continue
        }

        // 命中右守卫向前的情况
        if (sum < s && j < nums.length) {
            sum += nums[j ++]
            continue
        }

        // 命中右守卫已走到头，但是左守卫还未走到头的情况
        sum -= nums[i ++]
    }

    return result || 0
}
