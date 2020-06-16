import { describe, it } from 'mocha'
import { assert } from 'chai'
import DoublePointsSolution from '../solutions/DoublePointsSolution'

const mappedInputAndResults = (inputs: any[], ret: number) => {
    return { inputs, ret };
}

const case1 = mappedInputAndResults([1,1,2], 2)
const case2 = mappedInputAndResults([0,0,1,1,1,2,2,3,3,4], 5)

describe('有序数组去重测试用例', () => {
    it('双指针法', () => {
        assert.equal(DoublePointsSolution([...case1.inputs]), case1.ret)
        assert.equal(DoublePointsSolution([...case2.inputs]), case2.ret)
    })
})
