const maxLimit: number = 1000
const minLimit: number = 0

/**
 * 交换数组的两个元素的位置
 * @param list
 * @param idx1
 * @param idx2
 */
function swap(list: Array<number>, idx1: number, idx2: number): void {
    const tmp = list[idx1]
    list[idx1] = list[idx2]
    list[idx2] = tmp
}

/**
 * 返回一个随机生成的数字
 * @param min
 * @param max
 */
export const genRandomNumber = (min: number = minLimit, max: number = maxLimit): number => {
    return Math.floor(Math.random() * (max - min)) + min
}

/**
 * 返回一个乱序的数组
 * @param capacity
 * @param min
 * @param max
 */
export const genRandomNumberList = (capacity: number = 10, min: number = minLimit, max: number = maxLimit): Array<number> => {
    const ret: Array<number> = []
    while (capacity --) {
        ret.push(genRandomNumber(min, max))
    }
    return ret
}

/**
 * 返回一个有序的随机数组
 * @param capacity
 * @param min
 * @param max
 */
export const genRandomOrderedNumberList = (capacity: number = 10, min: number = minLimit, max: number = maxLimit): Array<number> => {
    return genRandomNumberList(capacity, min, max).sort((v1, v2) => v1 - v2)
}

/**
 * 打乱一个数组
 * @param list
 */
export const permuteNumberList = (list: Array<number>): void=> {
    for (let i: number = list.length - 1; i > 0; i --) {
        swap(list, i, genRandomNumber(0, list.length - 1))
    }
}

/**
 * 返回一个带有重复元素的数组
 * @param capacity
 * @param min
 * @param max
 */
export const genRandomRepeatedNumberList = (capacity: number = 10, min: number = minLimit, max: number = maxLimit): Array<number> => {
    const ret: Array<number> = genRandomNumberList(capacity - 1, min, max)
    ret.push(ret[0])
    permuteNumberList(ret)
    return ret
}

/**
 * 返回一个不带有重复元素的数组
 * @param capacity
 * @param min
 * @param max
 */
export const genNoneRepeatedNumberList = (capacity: number = 10, min: number = minLimit, max: number = maxLimit): Array<number> => {
    const ret: Array<number> = []
    while(true) {
        const current = genRandomNumber(min, max)
        if (ret.indexOf(current) === -1) ret.push(current)
        if (ret.length >= capacity) break
    }

    return ret
}

interface IGen0bNumber {
    min?: number
    max?: number
    length?: number
    needArray?: boolean
}

/**
 * 返回一个二进制字符串或者数组
 * 只支持 10 位以下
 * @param min 最大值
 * @param max 最小值
 * @param length 长度
 * @param needArray 是否需要 Array 格式返回
 */
export const gen0bNumber = ({
    min = minLimit,
    max = maxLimit,
    needArray = false,
    length = 10
}: IGen0bNumber): string | Array<number> => {
    const targetStr: string = genRandomNumber(min, max).toString(2)
    const retStr = `${new Array(length).fill(0).join('')}${targetStr}`.slice(-length)

    return needArray
        ? retStr.split('').map(v => Number(v))
        : retStr
}

