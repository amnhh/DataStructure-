import { describe, it } from 'mocha'
import { assert } from 'chai'

import LoopInLoopSolution from '../solutions/LoopInLoopSolution'
import HashMapSolution from '../solutions/HashMapSolution'

type TwoSumParams = [Array<number>, number]

describe('TwoSum 测试用例', () => {
    const testCase1: TwoSumParams = [[2,7,11,15], 9]
    it('暴力两次循环破解', () => {
        assert.deepEqual([0, 1], LoopInLoopSolution(...testCase1))
    })

    it('hashMap 解法', () => {
        assert.deepEqual([0, 1], HashMapSolution(...testCase1))
    })
})
