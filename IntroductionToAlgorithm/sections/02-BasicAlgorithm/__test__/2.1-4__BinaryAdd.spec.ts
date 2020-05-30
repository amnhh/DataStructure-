import { describe, it } from 'mocha'
import { assert } from 'chai'
import { gen0bNumber } from '../../../../share/generator'
import {
    transformBinaryToDecimal,
    transformDecimalToBinary,
    numbersInsertZeroFromStart
} from '../../../../share/transform'
import binaryAdd from '../code/2.1-4__BinaryAdd'

type TSolution = {
    A: Array<number>
    B: Array<number>
    return: Array<number>
}

function sourceDataResolver (A: Array<number>, B: Array<number>): TSolution {
    const ret: TSolution = <TSolution> {
        A,
        B
    }

    // 十进制计算
    const resultNumber = transformBinaryToDecimal(A.join('')) + transformBinaryToDecimal(B.join(''))

    // 转成二进制，补0
    ret.return = numbersInsertZeroFromStart(
        transformDecimalToBinary(resultNumber),
        B.length + 1,
        0
    )
        // 转数组
        .split('')
        // 每一位转数字
        .map(v => Number(v))

    return ret
}

const number1 = gen0bNumber({ needArray: true })
const number2 = gen0bNumber({ needArray: true })
const number3 = gen0bNumber({ needArray: true })
const number4 = gen0bNumber({ needArray: true })
const number5 = gen0bNumber({ needArray: true })

const ret1 = sourceDataResolver(<Array<number>>number1, <Array<number>>number2)
const ret2 = sourceDataResolver(<Array<number>>number2, <Array<number>>number3)
const ret3 = sourceDataResolver(<Array<number>>number3, <Array<number>>number4)
const ret4 = sourceDataResolver(<Array<number>>number4, <Array<number>>number5)

describe('二进制数相加', () => {
    it('题解正确', () => {
        assert.deepEqual(binaryAdd(ret1.A, ret1.B), ret1.return)
        assert.deepEqual(binaryAdd(ret2.A, ret2.B), ret2.return)
        assert.deepEqual(binaryAdd(ret3.A, ret3.B), ret3.return)
        assert.deepEqual(binaryAdd(ret4.A, ret4.B), ret4.return)
    })
})
