/**
 * 交换 list 中 idx1 和 idx2 的位置
 * @param list
 * @param idx1
 * @param idx2
 */
export const swap = <T>(list: Array<T>, idx1: number, idx2: number): void => {
    const tmp: T = list[idx1]
    list[idx1] = list[idx2]
    list[idx2] = tmp
}

/**
 * js 原生 sort 封装，升序
 * @param list
 */
export const nativeSort = (list: Array<number>): Array<number> => list.sort((v1, v2) => v1 - v2)

/**
 * js 原生 sort 封装，降序
 * @param list
 */
export const nativeSortReverse = (list: Array<number>): Array<number> => nativeSort(list).reverse()
