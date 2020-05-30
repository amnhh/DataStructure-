import { describe, it } from 'mocha'
import { genRandomNumberList } from '../../../../share/generator'
import { assert } from 'chai'

import InsertionSortReverse from '../code/2.1-2__InsertionSort'

// 原生的 sort 方法
const sort = (nums: Array<number>): Array<number> => nums.sort((v1, v2) => v2 - v1)

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('习题 2.1-2 测试用例', () => {
    it('解法正确', () => {
        assert.deepEqual(sort(list1), InsertionSortReverse(list1))
        assert.deepEqual(sort(list2), InsertionSortReverse(list2))
        assert.deepEqual(sort(list3), InsertionSortReverse(list3))
        assert.deepEqual(sort(list4), InsertionSortReverse(list4))
        assert.deepEqual(sort(list5), InsertionSortReverse(list5))
    })
})
