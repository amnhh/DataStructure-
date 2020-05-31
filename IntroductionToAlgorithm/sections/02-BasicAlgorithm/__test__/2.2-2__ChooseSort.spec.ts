import { describe, it } from 'mocha'
import { assert } from 'chai'
import { genRandomNumberList } from '../../../../share/generator'
import { nativeSort } from '../../../../share/utils'
import chooseSort, { chooseSortFast } from '../code/2-2.2__ChooseSort'

const list1 = genRandomNumberList()
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('选择排序测试用例', () => {
    it('原始选择排序', () => {
        assert.deepEqual(nativeSort(list1), chooseSort(list1))
        assert.deepEqual(nativeSort(list2), chooseSort(list2))
        assert.deepEqual(nativeSort(list3), chooseSort(list3))
        assert.deepEqual(nativeSort(list4), chooseSort(list4))
        assert.deepEqual(nativeSort(list5), chooseSort(list5))
    })
    it('每次同时选择最大值和最小值的排序测试', () => {
        assert.deepEqual(nativeSort(list1), chooseSortFast(list1))
        assert.deepEqual(nativeSort(list2), chooseSortFast(list2))
        assert.deepEqual(nativeSort(list3), chooseSortFast(list3))
        assert.deepEqual(nativeSort(list4), chooseSortFast(list4))
        assert.deepEqual(nativeSort(list5), chooseSortFast(list5))
    })
})
