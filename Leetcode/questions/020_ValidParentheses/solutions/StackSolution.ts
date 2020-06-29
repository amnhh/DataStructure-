/**
 * @title 借助栈的思路来解决
 *
 * @index 1
 *
 * @trainOfThought
 * 遇到左括号则进栈，遇到右括号则检测是否与栈顶的左括号匹配
 * 匹配则出栈，不匹配则说明整条字符不合法
 * 遍历完全后检验是否栈中还有元素，没有元素则说明刚刚好，有元素则说明缺失了右括号，字符串不合法
 *
 * @complexAnalysis
 * 时间复杂度：只遍历了一次字符串，所以为 O(n)
 * 空间复杂度：整个字符串全为一种左括号时出现最坏情况，所以空间复杂度也为 O(n)
 *
 * @score 时间、内存消耗得分
 * 执行用时64ms击败 87.10% ，内存消耗32.7 MB击败 100.00%
 */

export default function StackSolution (s: string): boolean {
    const stack: string[] = []
    let rightToLeftMap: {[key: string]: string} = {
        ']': '[',
        '}': '{',
        ')': '('
    }

    for (let i = 0; i < s.length; i ++) {
        const current: string = s[i]
        const match = rightToLeftMap[current]
        if (!match) {
            stack.push(current)
        } else {
            if (stack[stack.length - 1] !== match) return false
            else stack.pop()
        }
    }

    return stack.length === 0
}
