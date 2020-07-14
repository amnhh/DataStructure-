/**
 * @title 对撞指针解法
 *
 * @index 1
 *
 * @trainOfThought
 *  输入的字符串可能不止包含 0-9 和 a-z
 *  所以我们先处理字符串：全小写后去除 [0-9a-z] 以外的值
 *
 * @complexAnalysis
 *  时间：O(n)
 *  空间：O(2)
 *
 * @type 对撞指针
 *
 * @category 对撞指针
 *
 * @score 时间、内存消耗得分
 * 执行用时84 ms击败 78.44%，内存消耗37.7 MB击败 38.46%
 */

export default function TwoPointsSolution (s: string): boolean {
    s = s.toLowerCase().replace(/[^0-9a-z]/g, '')

    // 左右指针，保证的是 [0, i] 和 [j, s.length - 1] 两个闭区间内的值每个位置分别相等
    let i: number = 0,
        j: number = s.length - 1

    while (i <= j) {
        if (s[i]) {}

        if (s[i] === s[j]) {
            i ++
            j --
        }
        else return false
    }


    return true
}
