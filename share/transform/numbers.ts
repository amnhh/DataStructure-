/**
 * 将一个二进制字面量或者二进制字符串，转换为十进制数字
 * @param str
 */
export const transformBinaryToDecimal = (v: string | number): number => {
    return Number(`0b${v}`)
}

/**
 * 将一个十进制字面量或者十进制字符串，转换为二进制字符串
 * @param str
 */
export const transformDecimalToBinary = (v: string | number): string => {
    return Number(v).toString(2)
}

/**
 * 某个数字或者字符串前面补充0（或者其他的东西~）
 * @param v
 * @param length
 * @param defaultValue
 */
export const numbersInsertZeroFromStart = (
    v: string | number,
    length: number = 10,
    defaultValue: number = 0
): string => {
    return `${new Array(length).fill(defaultValue).join('')}${v}`.slice(-length)
}
