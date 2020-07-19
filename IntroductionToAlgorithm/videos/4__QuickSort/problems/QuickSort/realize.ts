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
    let i: number = start + 1

    for (let j: number = start + 1; j <= end; j ++) {
        // 如果 j 位置上的小于基准值，则应该放在左方
        if (A[j] < pivotValue) {
            swap(A, i, j)
            i ++
        }

        j ++
    }

    swap(A, i, start)

    return i
}
