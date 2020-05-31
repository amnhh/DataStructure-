/**
 * 归并排序
 * @param nums
 * @param p
 * @param r
 */
export default function mergeSort (
    nums: Array<number>,
    p: number = 0,
    r: number = nums.length
): Array<number> {
    walk(nums, p, r)
    return nums
}

/**
 * 合并函数
 * @param nums
 * @param p
 * @param q
 * @param r
 */
export function merge (
    nums: Array<number>,
    start: number,
    mid: number,
    end: number
): void {
    const n1: number = mid - start + 1,
        n2: number = end - mid,
        L: Array<number> = new Array(n1),
        R: Array<number> = new Array(n2)

    for (let i: number = 0; i < n1; i ++) {
        L[i] = nums[start + i]
    }
    for (let j: number = 0; j < n2; j ++) {
        R[j] = nums[mid + j]
    }
    L[n1 + 1] = Infinity
    R[n2 + 1] = Infinity

    let i = 1, j = 1
    for (let k: number = start; k < end; k ++) {
        if (L[i] <= R[j]) {
            nums[k] = L[i]
            i ++
        } else {
            nums[k] = R[j]
            j ++
        }
    }
}

/**
 * 一个 walk 函数，处理 nums
 * @param nums
 * @param p
 * @param r
 */
function walk (nums: Array<number>, p: number = 0, r: number = nums.length) {
    if (Math.ceil(p) < Math.ceil(r) && (p + r) % 2 === 0) {
        const q = (p + r) / 2
        walk(nums, q, p)
        walk(nums, q, r)
        merge(nums, p, q, r)
    }
}
