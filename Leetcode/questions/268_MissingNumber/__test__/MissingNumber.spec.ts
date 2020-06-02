import { describe, it } from 'mocha'
import { assert } from 'chai'

import DuplicateArraySolution from '../solutions/DuplicateArraySolution'
import ReorderSolution from '../solutions/ReorderSolution'

describe('268. 寻找缺失的数字测试用例', () => {
    it('解法一正确', () => {
        assert.equal(DuplicateArraySolution([3, 0, 1]), 2)
        assert.equal(DuplicateArraySolution([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
    })

    it('解法二正确', () => {
        assert.equal(ReorderSolution([3, 0, 1]), 2)
        assert.equal(ReorderSolution([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
        assert.equal(ReorderSolution([0, 1]), 2)
    })
})
