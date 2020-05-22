/**
 * @title hashMap 求解
 *
 * @index 2
 *
 * @trainOfThought
 *  建立一个 hashMap，遍历数组
 *  hashMap[current] 为空则赋值，不为空则说明前面出现过这个数字
 *
 * @complex 时间 O(n) + 空间 O(n)
 *
 * @type HashMap
 */

type THashMap = {
    [index: number]: boolean
}

function hashMapSolution (list: Array<number>): boolean {
    const hashMap: THashMap = {}
    for (let i: number = 0; i < list.length; i ++) {
        if (!hashMap[list[i]]) {
            hashMap[list[i]] = true
        } else {
            return true
        }
    }
    return false
}

export default hashMapSolution
