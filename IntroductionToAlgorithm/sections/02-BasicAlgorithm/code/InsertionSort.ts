/**
 * 插入排序
 * @param nums
 * @constructor
 */
export default function InsertionSort (nums: Array<number>): Array<number> {
    for (let j: number = 1; j < nums.length; j ++) {
        // 取出当前值，以保证在后续的 while 循环中，该值不丢失
        const key: number = nums[j]
        let i: number = j - 1
        while (i > 0 && nums[i] > key) {
            // 大于 key 的全部后移
            nums[i + 1] = nums[i]
            i --
        }
        nums[i + 1] = key
    }
    return nums
}
