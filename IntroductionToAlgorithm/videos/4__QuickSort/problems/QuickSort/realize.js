function QuickSort(A, p, q) {
    if (p === void 0) { p = 0; }
    if (q === void 0) { q = A.length; }
    if (p < q) {
        var r = partition(A, p, q);
        QuickSort(A, 0, r - 1);
        QuickSort(A, r + 1, q);
    }
    return A;
}
function swap(A, idx1, idx2) {
    var tmp = A[idx1];
    A[idx1] = A[idx2];
    A[idx2] = tmp;
}
function partition(A, start, end) {
    var pivotValue = A[start];
    var i = start + 1;
    for (var j = start + 1; j <= end; j++) {
        // 如果 j 位置上的小于基准值，则应该放在左方
        if (A[j] < pivotValue) {
            swap(A, i, j);
            i++;
        }
        j++;
    }
    swap(A, i, start);
    return i;
}
