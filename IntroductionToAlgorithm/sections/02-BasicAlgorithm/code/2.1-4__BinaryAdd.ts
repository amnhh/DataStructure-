/**
 * 二进制数相加
 * @param A
 * @param B
 */
export default function binaryAdd(A: Array<number>, B: Array<number>): Array<number> {
    if (A.length !== B.length) throw new Error('List A and B need to be the same length.')

    const C: Array<number> = new Array(A.length + 1)

    let overflow: number = 0
    for (let j = A.length - 1; j >= 0; j --) {
        C[j + 1] = A[j] + B[j] + overflow
        if (C[j + 1] > 1) {
            overflow = 1
            C[j + 1] -= 2
        } else {
            overflow = 0
        }
    }

    C[0] = overflow

    return C
}
