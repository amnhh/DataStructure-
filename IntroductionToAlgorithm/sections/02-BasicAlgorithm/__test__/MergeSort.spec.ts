import { describe, it } from 'mocha'
import { assert } from 'chai'
import { genRandomNumberList } from '../../../../share/generator'
import mergeSort from '../code/MergeSort'
import { nativeSort } from '../../../../share/utils/lang';

const list1 = genRandomNumberList(8)
const list2 = genRandomNumberList()
const list3 = genRandomNumberList()
const list4 = genRandomNumberList()
const list5 = genRandomNumberList()

describe('归并排序', () => {
    it('排序代码正确', () => {
        assert.deepEqual(nativeSort(list1), mergeSort(list1))
        assert.deepEqual(nativeSort(list2), mergeSort(list2))
        assert.deepEqual(nativeSort(list3), mergeSort(list3))
        assert.deepEqual(nativeSort(list4), mergeSort(list4))
        assert.deepEqual(nativeSort(list5), mergeSort(list5))
    })
})
