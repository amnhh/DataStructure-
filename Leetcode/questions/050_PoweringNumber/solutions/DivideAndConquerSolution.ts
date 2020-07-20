/**
 * @title 分治解法
 *
 * @index 2
 *
 * @trainOfThought
 * x^n可以拆解为：
 * if even: x^(n/2) · x^(n/2)
 * if odd: x^((n + 1) / 2) · x^((n + 1) / 2) · x
 *
 * 所以使用分治的思路：
 *
 * Divide: 拆分子问题
 * Conquer: 解决子问题
 * Combine: 子问题相乘
 *
 * @complexAnalysis O(lgn)
 *
 * @type
 *  分而治之
 *
 * @score 时间、内存消耗得分
 * 执行用时60 ms击败 97.26% ，内存消耗33.1 MB击败 100%
 */

export default function DivideAndConquerSolution (x: number, n: number): number {
    // n > 0 时的跳出条件
    if (n === 1) return x
    // n < 0 时的跳出条件
    if (n === -1) return 1/x
    // n === 0 的输入的返回值
    if (n === 0) return 1
    // divide
    let divide,
        isEven = n % 2 === 0
    if (isEven) divide = n / 2
    else divide = (n - 1) / 2
    // conquer & recursive
    let conquer = DivideAndConquerSolution(x, divide)

    // combine
    return isEven
        ? conquer * conquer
        : conquer * conquer * x
}
