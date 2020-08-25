/**
 * @title 对撞指针
 *
 * @index 1
 *
 * @trainOfThought
 *  设置一个基准的 max 值和左右两个指针
 *  在指针移动的过程中记录当前的最大值
 *  因为每次计算中，消耗的是低的那一位，所以计算完成后，修正低的那一位指针，使之更加靠拢中间
 *  遍历结束后，返回最大的值即可
 *
 * @complexAnalysis
 *  时间：O(n)
 *  空间：O(1)
 *
 * @type 对撞指针
 *
 * @category 对撞指针
 *
 * @score 时间、内存消耗得分
 * 执行用时 64 ms 击败 96.93 %，内存消耗 36.6 mb 击败 11.76%
 */

export default function TwoPointsSolution (height: number[]): number {
    let max: number = 0

    let i: number = 0,
        j: number = height.length - 1

    while (i < j) {

        const needRightPointMove = height[i] > height[j]
        let current: number

        if (needRightPointMove) {
            current = height[j] * (j - i)
        } else {
            current = height[i] * (j - i)
        }

        if (current > max) max = current

        // 舍弃矮的那个
        if (needRightPointMove) j --
        else i ++
    }

    return max
}
