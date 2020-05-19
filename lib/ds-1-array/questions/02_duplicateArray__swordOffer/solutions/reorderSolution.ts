/**
 * 方法三：重排数组
 *
 * @index 3
 *
 * @trainOrThought
 *  给定数组长度为 n，所有数字都在 0 ~ n-1, 则给定的数组想要返回 false，一定得是一个萝卜一个坑
 *  不能多也不能少，reorder 后每个位置都对应着他的下标
 *  数组能倚仗的，其实就只有他的下标。
 *
 * @complex
 *  时间 O(n)
 */

function reorderSolution(list: Array<number>): boolean {
    for (let i: number = 0; i < list.length; i ++) {
        while(list[i] !== i) {
            if (list[i] === list[list[i]]) {
                return true
            }
            let tmp: number = list[i]
            list[i] = list[tmp]
            list[tmp] = tmp
        }
    }
    return false
}

export default reorderSolution
