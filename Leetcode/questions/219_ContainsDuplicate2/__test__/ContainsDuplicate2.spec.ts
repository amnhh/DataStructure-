import { describe, it } from 'mocha'
import { assert } from 'chai'
import LoopInLoopSolution from '../solutions/LoopInLoopSolution'
import SliderSolution from '../solutions/SliderSolution'
import HashMapSolution from '../solutions/HashMapSolution'

describe('存在重复的元素II', () => {
    it('两重循环解法', () => {
        assert.isTrue(LoopInLoopSolution([1, 2, 3, 1], 3))
        assert.isTrue(LoopInLoopSolution([1, 0, 1, 1], 1))
        assert.isFalse(LoopInLoopSolution([1, 2, 3, 1, 2, 3], 2))
    })
    it('单次循环并充分利用 i 和 j 的关系', () => {
        assert.isTrue(SliderSolution([1, 2, 3, 1], 3))
        assert.isTrue(SliderSolution([1, 0, 1, 1], 1))
        assert.isFalse(SliderSolution([1, 2, 3, 1, 2, 3], 2))
        assert.isTrue(SliderSolution([0, 1, 2, 3, 2, 5], 3))
        assert.isTrue(SliderSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3))
    })
    it('HashMap 解法', () => {
        assert.isTrue(HashMapSolution([1, 2, 3, 1], 3))
        assert.isTrue(HashMapSolution([1, 0, 1, 1], 1))
        assert.isFalse(HashMapSolution([1, 2, 3, 1, 2, 3], 2))
        assert.isTrue(HashMapSolution([0, 1, 2, 3, 2, 5], 3))
        assert.isTrue(HashMapSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3))
    })
})
