import { describe, it } from 'mocha'
import { assert } from 'chai'
import findMaxSubArray from '../solutions';

const inputResolver1 = () => [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
const inputResult1 = 43

describe('解法正确', () => {
    it('对于 input1 正确解决', () => {
        assert.equal(findMaxSubArray(inputResolver1()), inputResult1)
    })
})
