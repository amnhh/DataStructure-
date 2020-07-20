/**
 * 归并法解决最大子数组问题
 * @param A
 * @param low
 * @param high
 */
export default function findMaxSubArray (A: number[], low: number = 0, high: number = A.length - 1): number {
    // 递归跳出条件
    if (low === high) return A[low]

    // divide
    const mid: number = Math.floor((low + high) / 2)

    // 左边那半的最大值
    const leftMax: number = findMaxSubArray(A, low, mid)
    // 右边那半的最大值
    const rightMax: number = findMaxSubArray(A, mid + 1, high)
    // 计算出左侧和右侧的最大值了之后，就只剩下包含中间节点的子数组了
    const crossingMax: number = findCrossMaxSubArray(A, low, mid, high)

    return Math.max(leftMax, rightMax, crossingMax)
}


/**
 * 计算子问题中的最大数字
 * @param A
 * @param low
 * @param high
 */
function findCrossMaxSubArray (A: number[], low: number, mid: number, high: number): number {
    // 先计算左半部分
    let leftSum: number = -Infinity
    {
        let sum: number = 0
        // 不做跳跃性的累加，保证了一定连续
        for (let i = mid; i > low; i --) {
            sum += A[i]
            if (leftSum < sum) leftSum = sum
        }
    }
    let rightSum: number = -Infinity
    {
        let sum: number = 0
        // 不做跳跃性的累加，保证了一定连续
        for (let i = mid + 1; i < high; i ++) {
            sum += A[i]
            if (rightSum < sum) rightSum = sum
        }
    }

    return Math.max(leftSum, rightSum, leftSum + rightSum)
}
