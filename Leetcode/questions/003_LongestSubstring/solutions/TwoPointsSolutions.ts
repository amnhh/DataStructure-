/**
 * @title 标题
 *
 * @index 次序
 *
 * @trainOfThought 思路
 *
 * @complexAnalysis 复杂度分析
 *
 * @type 解法类型
 *
 * @note 笔记
 *
 * @remark 备注
 *
 * @category 想要分配到哪个大类下
 */

export default function lengthOfLongestSubstring (s: string): number {
    const map: Map<string, number> = new Map()
    let left = 0, right = 0, max = 0

    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(<number>map.get(s[right]) + 1, left)
        }

        max = Math.max(max, right - left + 1)
        map.set(s[right], right)
        right ++
    }

    return max
}
