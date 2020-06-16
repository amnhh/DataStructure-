import { describe, it } from 'mocha'
import { assert } from 'chai'
import DoublePointsSolution from '../solutions/DoublePointsSolution'

const mappedInputAndResults = (inputs: any[], ret: number) => {
    return { inputs, ret }
}

const case1 = mappedInputAndResults([[3,2,2,3], 3], 2)
const case2 = mappedInputAndResults([[0,1,2,2,3,0,4,2], 2], 5)


describe('026 移除元素', () => {
    it('双指针法', () => {
        assert.equal(DoublePointsSolution([...case1.inputs[0]], case1.inputs[1]), case1.ret)
        assert.equal(DoublePointsSolution([...case2.inputs[0]], case2.inputs[1]), case2.ret)
    })
})
