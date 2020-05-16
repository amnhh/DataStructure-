import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import MyArray from '../../realize/Array'

const filterExactNumberOfArray = <T> (myArray: MyArray<T>): Array<T> => myArray.data.filter(v => !!v)

describe('数组测试用例', () => {
  describe('<Ctor>constructor: 构造器方法', () => {
    it('形参「capacity」决定数组的长度，默认为10', () => {
      const initialTestDemo: MyArray<number> = new MyArray()
      assert.equal(initialTestDemo.getCapacity(), 10)
      
      const capacityTestDemo: MyArray<number> = new MyArray(20)
      assert.equal(capacityTestDemo.getCapacity(), 20)
    })
  })

  describe('<method>getSize: 获取数组目前存储了多少元素', () => {
    const sizeTestDemo: MyArray<number> = new MyArray()
    
    it('初始化时，数组存储了 0 个元素', () => {
      assert.equal(sizeTestDemo.getSize(), 0)
    })

    it('添加元素时，size 值变化', () => {
      sizeTestDemo.addFirst(1)
      sizeTestDemo.addFirst(123)
      sizeTestDemo.addFirst(123)
      sizeTestDemo.addFirst(1234)
      assert.equal(sizeTestDemo.getSize(), 4)
      sizeTestDemo.remove(0)
      assert.equal(sizeTestDemo.getSize(), 3)
    })
  })

  describe('<method>isEmpty: 判断数组是否为空数组', () => {
    const judgeEmptyDemo: MyArray<number> = new MyArray()
    
    it('初始化时，数组应该为空', () => {
      assert.isTrue(judgeEmptyDemo.isEmpty())
    })

    it('数组中存在元素时，不为空', () => {
      judgeEmptyDemo.addFirst(10)
      assert.isFalse(judgeEmptyDemo.isEmpty())
    })
  })

  describe('<method>add, addFirst, addLast: 添加元素', () => {
    const addMethodDemo: MyArray<number> = new MyArray()
    it('向特定位置添加', () => {
      const finalList: Array<number> = [10, 30, 20]
      addMethodDemo.add(10, 0)
      addMethodDemo.add(20, 1)
      addMethodDemo.add(30, 1)
      assert.deepEqual(finalList, filterExactNumberOfArray(addMethodDemo))
    })

    it('头部添加', () => {
      const finalList: Array<number> = [40, 10, 30, 20]
      addMethodDemo.addFirst(40)
      assert.deepEqual(finalList, filterExactNumberOfArray(addMethodDemo))
    })

    it('尾部添加', () => {
      const finalList: Array<number> = [40, 10, 30, 20, 50]
      addMethodDemo.addLast(50)
      assert.deepEqual(finalList, filterExactNumberOfArray(addMethodDemo))
    })

    it('超出当前范围时，会进行扩容，扩容为旧容量的2倍', () => {
      const addResizeDemo: MyArray<number> = new MyArray(8)
      let initSize: number = 8
      for (let i: number = 0; i < initSize; i ++) {
        addResizeDemo.addLast(i)
      }
      assert.equal(addResizeDemo.getCapacity(), 8)
      addResizeDemo.addLast(9)
      assert.equal(addResizeDemo.getCapacity(), 16)
    })
  })

  describe('<method>set: 直接设置元素的值', () => {
    // 初始化 setMethodDemo 为 [1, 2, 3, 4]
    const setMethodDemo: MyArray<number> = new MyArray()
    setMethodDemo.addLast(1)
    setMethodDemo.addLast(2)
    setMethodDemo.addLast(3)
    setMethodDemo.addLast(4)

    it('可以直接设置 size 以内的值', () => {
      const finalList: Array<number> = [1, 2, 5, 4]
      setMethodDemo.set(5, 2)
      assert.deepEqual(finalList, filterExactNumberOfArray(setMethodDemo))
    })
  })

  describe('<method>get: 直接获取某个索引的值', () => {
    const getMethodDemo: MyArray<number> = new MyArray()
    getMethodDemo.addLast(1)
    getMethodDemo.addLast(2)
    getMethodDemo.addLast(3)
    getMethodDemo.addLast(4)
    it('直接获取 size 内的值', () => {
      assert.equal(getMethodDemo.get(0), 1)
      assert.equal(getMethodDemo.get(1), 2)
      assert.equal(getMethodDemo.get(2), 3)
      assert.equal(getMethodDemo.get(3), 4)
    })
  })
  
  describe('<method>contains: 检测当前数组是否包含某个值', () => {
    const containMethodDemo: MyArray<number> = new MyArray()
    containMethodDemo.addLast(5)
    it('包含则返回 true', () => {
      assert.isTrue(containMethodDemo.contains(5))
    })
    it('不包含则返回 false', () => {
      assert.isFalse(containMethodDemo.contains(10))
    })
  })
  
  describe('<method>find: 找到某个值对应的索引', () => {
    const findMethodDemo: MyArray<number> = new MyArray()
    it('找到则返回对应的索引', () => {
      const initList = [10, 20, 30, 40]
      initList.forEach(i => findMethodDemo.addLast(i))

      assert.equal(findMethodDemo.find(10), initList.indexOf(10))
      assert.equal(findMethodDemo.find(20), initList.indexOf(20))
      assert.equal(findMethodDemo.find(30), initList.indexOf(30))
      assert.equal(findMethodDemo.find(40), initList.indexOf(40))
    })
  
    it('没找到则返回 -1', () => {
      assert.equal(findMethodDemo.find(50), -1)
    })
  })

  describe('<method>remove, removeFirst, removeLast, removeElement: 移除元素', () => {
    const removeMethodDemo: MyArray<number> = new MyArray()
    
    const initialList: Array<number> = [10, 20, 30, 40]
    initialList.forEach(v => removeMethodDemo.addLast(v));

    it('指定位置移除', () => {
      // [10, 20, 30, 40] => [10, 20, 40]
      removeMethodDemo.remove(2)
      assert.deepEqual([10, 20, 40], filterExactNumberOfArray(removeMethodDemo))
    })

    it('头部移除', () => {
      // [10, 20, 40] => [20, 40]
      removeMethodDemo.removeFirst()
      assert.deepEqual([20, 40], filterExactNumberOfArray(removeMethodDemo))
    })

    it('尾部移除', () => {
      // [20, 40] => [20]
      removeMethodDemo.removeLast()
      assert.deepEqual([20], filterExactNumberOfArray(removeMethodDemo))
    })

    it('移除某个值的元素', () => {
      // [20] => []
      removeMethodDemo.removeElement(20)
      assert.deepEqual([], filterExactNumberOfArray(removeMethodDemo))
    })
  })

  describe('<method>resize: 修改数组的长度', () => {
    const initialCapacity: number = 8
    const resizeMethodDemo: MyArray<number> = new MyArray(initialCapacity)
    it('可以修改数组的大小', () => {
      assert.equal(resizeMethodDemo.getCapacity(), initialCapacity)
      resizeMethodDemo.resize(initialCapacity * 2)
      assert.equal(resizeMethodDemo.getCapacity(), initialCapacity * 2)
      // 复位
      resizeMethodDemo.resize(initialCapacity)
    })

    it('数据不会被改变', () => {
      const initialList: Array<number> = [10, 20, 30, 40]
      for (let i: number = 0; i < initialList.length; i ++) {
        resizeMethodDemo.addLast(initialList[i])
      }
      assert.deepEqual(filterExactNumberOfArray(resizeMethodDemo), initialList)
      resizeMethodDemo.resize(20)
      assert.deepEqual(filterExactNumberOfArray(resizeMethodDemo), initialList)
    })
  })
})
