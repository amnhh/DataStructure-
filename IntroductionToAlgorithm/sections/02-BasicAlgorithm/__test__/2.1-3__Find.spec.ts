import { describe, it } from 'mocha'
import { assert } from 'chai'

import { NIL } from '../../../../share/constants'
import findSolution from '../code/2.1-3__Find'

import { genRandomNumberList } from '../../../../share/generator'

type TSolution = {
    v: number
    A: Array<number>
    return: number | typeof NIL
}

// 处理入口数据，返回 TSolution 的模子
function sourceDataResolver (A: Array<number>, v: number): TSolution {
    const retNumber = Math.ceil(Math.random() * A.length * 2)
    const ret: TSolution = <TSolution> {
        v,
        A
    }

    if (retNumber > A.length) ret.return = NIL
    else {
        A[retNumber] = v
        ret.return = retNumber
    }

    return ret
}

const keyValue1 = sourceDataResolver(genRandomNumberList(), 10)
const keyValue2 = sourceDataResolver(genRandomNumberList(), 20)
const keyValue3 = sourceDataResolver(genRandomNumberList(), 30)
const keyValue4 = sourceDataResolver(genRandomNumberList(), 40)
const keyValue5 = sourceDataResolver(genRandomNumberList(), 50)
const keyValue6 = sourceDataResolver(genRandomNumberList(), 60)
const keyValue7 = sourceDataResolver(genRandomNumberList(), 70)
const keyValue8 = sourceDataResolver(genRandomNumberList(), 80)

describe('习题 2.1-3', () => {
    it('测试正确性', () => {
        assert.equal(findSolution(keyValue1.A, keyValue1.v), keyValue1.return)
        assert.equal(findSolution(keyValue2.A, keyValue2.v), keyValue2.return)
        assert.equal(findSolution(keyValue3.A, keyValue3.v), keyValue3.return)
        assert.equal(findSolution(keyValue4.A, keyValue4.v), keyValue4.return)
        assert.equal(findSolution(keyValue5.A, keyValue5.v), keyValue5.return)
        assert.equal(findSolution(keyValue6.A, keyValue6.v), keyValue6.return)
        assert.equal(findSolution(keyValue7.A, keyValue7.v), keyValue7.return)
        assert.equal(findSolution(keyValue8.A, keyValue8.v), keyValue8.return)
    })
})
