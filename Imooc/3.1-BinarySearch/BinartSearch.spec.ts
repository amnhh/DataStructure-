import { describe, it } from 'mocha'
import { assert } from 'chai'
import BinarySearch from './BinarySearch'

describe('二分查找测试用例', () => {
    const case1 = {
        input: [1, 2, 3, 4, 5, 6, 7],
        target: 7,
        result: 6
    }

    const case2 = {
        input: [3, 6, 13, 22, 34, 55, 62],
        target: 5,
        result: -1
    }

    it('正确', () => {
        assert.equal(BinarySearch(case1.input, case1.input.length, case1.target), case1.result)
        assert.equal(BinarySearch(case2.input, case2.input.length, case2.target), case2.result)
    })
})
