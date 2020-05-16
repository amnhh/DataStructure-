import { describe, it } from 'mocha'
import { assert } from 'chai'

import sortSolution from '../solutions/sortSolution'
import hashMapSolution from '../solutions/hashMapSolution'
import reorderSolution from '../solutions/reorderSolution'

describe('《剑指offer第二版》第三题测试用例', () => {
    const sourceList1: Array<number> = [2, 3, 1, 0, 2, 5, 3]
    const sourceList2: Array<number> = [0, 1, 2, 3, 4, 5]
    const sourceList3: Array<number> = []
    const sourceList4: Array<number> = [1, 1, 1, 1, 1]
    const sourceList5: Array<number> = [1, 2, 3, 4, 5, 0]

    it('方法1：排序后遍历', () => {
        assert.isTrue(sortSolution(sourceList1))
        assert.isFalse(sortSolution(sourceList2))
        assert.isFalse(sortSolution(sourceList3))
        assert.isTrue(sortSolution(sourceList4))
        assert.isFalse(sortSolution(sourceList5))
    })

    it('方法2：hashMap 解法', () => {
        assert.isTrue(hashMapSolution(sourceList1))
        assert.isFalse(hashMapSolution(sourceList2))
        assert.isFalse(hashMapSolution(sourceList3))
        assert.isTrue(hashMapSolution(sourceList4))
        assert.isFalse(hashMapSolution(sourceList5))
    })

    it('方法3：reorder 解法', () => {
        // assert.isTrue(reorderSolution(sourceList1))
        // assert.isFalse(reorderSolution(sourceList2))
        // assert.isFalse(reorderSolution(sourceList3))
        // assert.isTrue(reorderSolution(sourceList4))
        // assert.isFalse(reorderSolution(sourceList5))
        reorderSolution(sourceList5)
    })
})
