/**
 * @title 对撞指针解法
 *
 * @index 1
 *
 * @trainOfThought
 *  一左一右两个指针，如果匹配到辅音字母则修正指针
 *  如果匹配到都是元音字母则互换位置
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
 * 执行用时 88 ms 击败 84.60 %，内存消耗 41.4 mb 击败 100.00%
 */

export default function TwoPointsSolution (s: string): string {
    // 字符串恒不变，先考虑化为数组
    const sList: string[] = s.split('')
    // 合法的元音字母校验式
    const vowelReg: RegExp = /[aAeEiIoOuU]/;

    // 左右指针
    let i: number = 0,
        j: number = sList.length - 1

    while (i < j) {
        if (!vowelReg.test(sList[i])) {
            i ++
            continue
        }
        if (!vowelReg.test(sList[j])) {
            j --
            continue
        }

        const tmp = sList[i]
        sList[i] = sList[j]
        sList[j] = tmp
        i ++
        j --
    }

    return sList.join('')
}
