/**
 * @title 普通解法
 *
 * @index 1
 *
 * @trainOfThought
 *  连续使 n 个 x 相乘
 *
 * @complexAnalysis
 *  O(n)
 *
 *
 * 会超出时间限制
 */

export default function SimpleSolution (x: number, n: number): number {
    if (n === 0) return 1
    let ret: number = 1
    while (n !== 0) {
        if (n > 0) {
            ret *= x
            n --
        } else {
            ret /= x
            n ++
        }
    }
    return ret
}
