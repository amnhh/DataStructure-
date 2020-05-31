import { describe, it } from 'mocha'
import { genRandomNumberList } from '../../../../share/generator'
import { assert } from 'chai'

import InsertionSort from '../code/InsertionSort'

// 原生的 sort 方法
import { nativeSort } from '../../../../share/utils'

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('插入排序测试用例', () => {
    it('排序正确', () => {
        assert.deepEqual(nativeSort(list1), InsertionSort(list1))
        assert.deepEqual(nativeSort(list2), InsertionSort(list2))
        assert.deepEqual(nativeSort(list3), InsertionSort(list3))
        assert.deepEqual(nativeSort(list4), InsertionSort(list4))
        assert.deepEqual(nativeSort(list5), InsertionSort(list5))
    })
})
