/**
 * @title HashMap 解法
 *
 * @index 2
 *
 * @trainOfThought
 *  建立一个 HashMap,
 *  每遍历到一个值 ( index, val )的时候，
 *  如果说此时 HashMap[val] 有值，则说明已经匹配成功，返回 [HashMap[val], index]
 *  则向 HashMap 中记录 key: target - val, value: index
 *
 * @complex 时间 O(n), 空间 O(n)
 *
 * @type HashMap
 */

interface IHashMap {
    [key: number]: number
}

const hashMap: IHashMap = {}

export default function hashMapSolution (nums: Array<number>, target: number): Array<number> {
    for (let i: number = 0; i < nums.length; i ++) {
        const val: number = nums[i]
        if (hashMap[val] || hashMap[val] === 0) {
            return [hashMap[val], i]
        } else {
            hashMap[target - val] = i
        }
    }
    return []
}
