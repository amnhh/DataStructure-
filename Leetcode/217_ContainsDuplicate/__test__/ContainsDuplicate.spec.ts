import { describe, it } from 'mocha'
import { assert } from 'chai'

import HashMapSolution from '../solutions/HashMapSolution'
import SetSizeSolution from '../solutions/SetSizeSolution'
import ReorderSolution from '../solutions/ReorderSolution'

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

    it('借助 Set 这种数据结构的解法', () => {
        assert.isTrue(SetSizeSolution(genRandomRepeatedNumberList()))
        assert.isTrue(SetSizeSolution(genRandomRepeatedNumberList()))
        assert.isTrue(SetSizeSolution(genRandomRepeatedNumberList()))
        assert.isTrue(SetSizeSolution(genRandomRepeatedNumberList()))

        assert.isFalse(SetSizeSolution(genNoneRepeatedNumberList()))
        assert.isFalse(SetSizeSolution(genNoneRepeatedNumberList()))
        assert.isFalse(SetSizeSolution(genNoneRepeatedNumberList()))
        assert.isFalse(SetSizeSolution(genNoneRepeatedNumberList()))
    })

    it('排序后遍历的解法', () => {
        assert.isTrue(ReorderSolution(genRandomRepeatedNumberList()))
        assert.isTrue(ReorderSolution(genRandomRepeatedNumberList()))
        assert.isTrue(ReorderSolution(genRandomRepeatedNumberList()))
        assert.isTrue(ReorderSolution(genRandomRepeatedNumberList()))

        assert.isFalse(ReorderSolution(genNoneRepeatedNumberList()))
        assert.isFalse(ReorderSolution(genNoneRepeatedNumberList()))
        assert.isFalse(ReorderSolution(genNoneRepeatedNumberList()))
        assert.isFalse(ReorderSolution(genNoneRepeatedNumberList()))
    })
})
