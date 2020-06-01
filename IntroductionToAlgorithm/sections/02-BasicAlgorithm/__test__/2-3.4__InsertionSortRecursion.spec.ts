import { describe, it } from 'mocha'
import { genRandomNumberList } from '../../../../share/generator'
import { assert } from 'chai'

import insertSortRecursion from '../code/2-3.4__InsertionSortRecursion'
// 原生的 sort 方法
import { nativeSort } from '../../../../share/utils'

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('递归的插入排序测试用例', () => {
    it('解答正确', () => {
        assert.deepEqual(nativeSort(list1), insertSortRecursion(list1))
        assert.deepEqual(nativeSort(list2), insertSortRecursion(list2))
        assert.deepEqual(nativeSort(list3), insertSortRecursion(list3))
        assert.deepEqual(nativeSort(list4), insertSortRecursion(list4))
        assert.deepEqual(nativeSort(list5), insertSortRecursion(list5))
    })
})
