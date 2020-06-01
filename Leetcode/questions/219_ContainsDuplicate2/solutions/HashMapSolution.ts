/**
 * @title HashMap 解法
 *
 * @index 3
 *
 * @trainOfThought
 * 使用一个 hashMap 来存储出现过的元素，以当前值为 key, 当前索引为 value 存储
 * 如果遍历时发现 hashMap[currentValue] 不为空，就判断下 value 中存储的索引的差是否小于 k
 *
 * @complexAnalysis
 * O(n) 时间 + O(n) 空间
 *
 * @type HashMap
 *
 * @score 时间、内存消耗得分
 * 时间消耗击败 38.36%，内存消耗击败 50%
 */
type THashMap = {
    [key: number]: number
}

export default function HashMapSolution (nums: Array<number>, k: number): boolean {
    const HashMap: THashMap = <THashMap>{},
        len = nums.length

    for (let i: number = 0; i < len; i ++) {
        const currentValue = nums[i]
        if ((HashMap[currentValue] || HashMap[currentValue] === 0) && (i - HashMap[currentValue] <= k)) {
            return true
        } else {
            HashMap[currentValue] = i
        }
    }

    return false
}
