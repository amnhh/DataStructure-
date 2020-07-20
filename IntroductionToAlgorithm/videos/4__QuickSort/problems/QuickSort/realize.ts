function QuickSort (A: number[], p: number = 0, q: number = A.length): number[] {

    if (p < q) {
        const r = partition(A, p, q)
        QuickSort(A, 0, r - 1)
        QuickSort(A, r + 1, q)
    }

    return A
}

function swap(A: number[], idx1: number, idx2: number): void {
    const tmp = A[idx1]
    A[idx1] = A[idx2]
    A[idx2] = tmp
}

function partition (A: number[], start: number, end: number) {
    const pivotValue: number = A[start]
    let i: number = start

    for (let j: number = start + 1; j < end; j ++) {
        // 如果 j 位置上的小于基准值，则应该放在左方
        // 这里其实小于或者小于等于都可以，因为只是判断一个值位于左方还是右方的一个规则而已
        if (A[j] <= pivotValue) {
            swap(A, ++i, j)
        }
    }

    // 除去 start 位，我们保证 [start + 1, i] 位都比 A[start] 小
    // 所以交换 start 和 i 位，即可保证 start 位上的数字存在于它最终的位置
    // 循环不变式变为 [0, i - 1] 位均小于 pivotValue
    swap(A, i, start)

    // 最重要的其实是这个 return i
    // 因为有了这个 i，我们才能将原数组划分为两个部分
    // 才有了之后的 recursively sort subarrays.
    return i
}
