import { describe, it } from 'mocha'
import { genRandomNumberList } from '../../../../share/generator'
import { assert } from 'chai'

import InsertionSortReverse from '../code/2.1-2__InsertionSort'

import { nativeSortReverse } from '../../../../share/utils'

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('习题 2.1-2 测试用例', () => {
    it('解法正确', () => {
        assert.deepEqual(nativeSortReverse(list1), InsertionSortReverse(list1))
        assert.deepEqual(nativeSortReverse(list2), InsertionSortReverse(list2))
        assert.deepEqual(nativeSortReverse(list3), InsertionSortReverse(list3))
        assert.deepEqual(nativeSortReverse(list4), InsertionSortReverse(list4))
        assert.deepEqual(nativeSortReverse(list5), InsertionSortReverse(list5))
    })
})
