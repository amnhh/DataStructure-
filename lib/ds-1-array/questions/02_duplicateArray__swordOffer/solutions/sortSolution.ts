/**
 * 解法一：排序 + 遍历
 *
 * @index 1
 *
 * @trainOfThought
 *  先使用 array.prototype.sort 排序，而后进行遍历，如果后一位等于前一位的值，则为重复
 *
 * @complex
 *  时间: O(nlogn)
 *    快排 O(n * logn) + 遍历一次 O(n)
 */

function sortSolution(list:Array<number>): boolean {
    const _list: Array<number> = list.sort((n1: number, n2: number) => n1 - n2)
    for (let i: number = 0; i < _list.length; i ++) {
        if (_list[i] === _list[i + 1]) return true
    }
    return false
}

export default sortSolution
