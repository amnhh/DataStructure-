import { swap } from '../../../../share/utils'

/**
 * 选择排序
 * @param nums
 */
export default function chooseSort (nums: Array<number>): Array<number> {
    for (let j: number = 0; j < nums.length - 1; j ++) {
        let min: number = j, i: number = j
        while (i < nums.length) {
            if (nums[min] > nums[i]) min = i
            i ++
        }
        swap<number>(nums, j, min)
    }
    return nums
}

/**
 * 每次确定两个位置元素的选择排序
 * @param nums
 */
export function chooseSortFast (nums: Array<number>): Array<number> {
    for (let j: number = 0; j < Math.ceil(nums.length / 2); j ++) {
        debugger
        let i: number = j,
            min: number = i,
            max: number = i

        for (; i < nums.length - j; i ++) {
            if (nums[i] > nums[max]) max = i
            if (nums[i] < nums[min]) min = i
        }
        debugger
        if (max === j) {
            swap<number>(nums, max, nums.length - j - 1)
            swap<number>(nums, min, j)
        } else {
            swap<number>(nums, min, j)
            swap<number>(nums, max, nums.length - j - 1)
        }


    }
    return nums
}
// /**
//  * 每次确定两个位置元素的选择排序
//  * @param nums
//  */
// export function chooseSortFast (nums: Array<number>): Array<number> {
//     for (let j: number = 0; j < nums.length - 1; j ++) {
//         let min: number = j,
//             max: number = j,
//             i: number = j
//         while (i < nums.length - j) {
//             if (nums[i] > nums[max]) max = i
//             if (nums[i] < nums[min]) min = i
//             i ++
//         }
//         swap<number>(nums, min, j)
//         swap<number>(nums, max, nums.length - j)
//     }
//     return nums
// }
