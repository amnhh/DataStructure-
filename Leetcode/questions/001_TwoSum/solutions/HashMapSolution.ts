/**
 * @title HashMap 解法
 *
 * @index 2
 *
 * @trainOfThought
 *  建立一个 HashMap，key 为 target - current value, value 为当前的 index
 *  如果说遍历到 HashMap[current value] 为一个合法的 index，则说明已经找到这一对数据
 *  没有的话则写入 HashMap[target - current value] = index
 *
 * @complex 时间 O(n), 空间 O(n)
 */

export default function hashMapSolution (nums: number[], target: number): number[] {
    const hashMap: { [key: string]: number } = {}
    for (let i: number = 0; i < nums.length; i ++) {
        const current = nums[i]
        if (hashMap[current] || hashMap[current] === 0) return [hashMap[current], i]
        else hashMap[target - current] = i
    }
    return []
}
