import { NIL } from '../../../../share/constants'

/**
 * 在数组 A 中线性查找某个值 v
 * @param A
 * @param v
 */
export default function findSolution (A: Array<number>, v: number): number | typeof NIL {
    let j: number = 0
    while (A[j] != v && j < A.length) j ++
    return j < A.length
        ? j
        : NIL
}
