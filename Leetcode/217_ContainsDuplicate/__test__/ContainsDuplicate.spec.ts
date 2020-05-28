import { describe, it } from 'mocha'
import { assert } from 'chai'

import HashMapSolution from '../solutions/HashMapSolution'
import { genRandomRepeatedNumberList, genNoneRepeatedNumberList } from '../../../share/generator'

describe('217-存在重复元素 测试用例', () => {
    it('HashMap 解法', () => {
        assert.isTrue(HashMapSolution(genRandomRepeatedNumberList()))
        assert.isTrue(HashMapSolution(genRandomRepeatedNumberList()))
        assert.isTrue(HashMapSolution(genRandomRepeatedNumberList()))
        assert.isTrue(HashMapSolution(genRandomRepeatedNumberList()))

        assert.isFalse(HashMapSolution(genNoneRepeatedNumberList()))
        assert.isFalse(HashMapSolution(genNoneRepeatedNumberList()))
        assert.isFalse(HashMapSolution(genNoneRepeatedNumberList()))
        assert.isFalse(HashMapSolution(genNoneRepeatedNumberList()))
    })
})
