/**
 * @title 计数排序的解法
 *
 * @index 1
 *
 * @trainOfThought
 * 扫描一遍数组，依次记录下 0、1、2 的个数
 * 再遍历一遍数组，将三色的值，依据其个数分别放回去
 *
 * @complexAnalysis
 * 整体分为两个过程，一次遍历计数，一次遍历放回，所以时间复杂度：O(2n) => O(n)
 * 针对这道题而言，这种方式对额外空间的使用量，仅为三个计数的值和最终的索引，不与输入的规模成正相关，所以空间复杂度方面为 O(4) => O(1)
 * 而本身这种解法的空间复杂度，应该为：O(k), k 为取值的元素的取值范围
 *
 * @type 计数排序
 *
 * @note
 * 计数排序一般用于元素的可取的值极其有限的数组，我们可以使用变量来穷举出元素的可取的值
 * 而后一次遍历计数，一次遍历放回
 *
 * @score 时间、内存消耗得分
 * 执行用时76 ms击败 32.80% ，内存消耗32.6 MB击败 100.00%
 */

export default function FirstSolution (nums: number[]): number[] {
    let i: number = 0,
        j: number = 0,
        k: number = 0

    for (let v: number = 0; v < nums.length; v ++) {
        if (nums[v] === 0) i ++
        if (nums[v] === 1) j ++
        if (nums[v] === 2) k ++
    }

    let idx: number = 0

    while (idx < nums.length) {
        if (i !== 0) {
            nums[idx ++] = 0
            i --
            continue
        }
        if (j !== 0) {
            nums[idx ++] = 1
            j --
            continue
        }
        if (k !== 0) {
            nums[idx ++] = 2
            k --
        }
    }

    return nums
}
