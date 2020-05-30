import { describe, it } from 'mocha'
import { genRandomNumberList } from '../../../../share/generator'
import { assert } from 'chai'

import InsertionSort from '../code/InsertionSort'

// 原生的 sort 方法
const sort = (nums: Array<number>): Array<number> => nums.sort((v1, v2) => v1 - v2)

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('插入排序测试用例', () => {
    it('排序正确', () => {
        assert.deepEqual(sort(list1), InsertionSort(list1))
        assert.deepEqual(sort(list2), InsertionSort(list2))
        assert.deepEqual(sort(list3), InsertionSort(list3))
        assert.deepEqual(sort(list4), InsertionSort(list4))
        assert.deepEqual(sort(list5), InsertionSort(list5))
    })
})
