import { describe, it } from 'mocha'
import { assert } from 'chai'
import CStack from '../../realize'

describe('栈实现的测试用例', () => {
    it('isEmpty', () => {
        const stack = new CStack()
        it('长度为空时，返回 true', () => {
            assert.isTrue(stack.isEmpty())
        })
        it ('长度不为空时，返回 false', () => {
            stack.push(0)
            assert.isFalse(stack.isEmpty())
        })
    })
    it('getSize', () => {
        const stack = new CStack()
        it('长度为空时，返回 0', () => {
            assert.equal(stack.getSize(), 0)
        })
        it('长度不为空时，返回相应的长度', () => {
            stack.push(0)
            assert.equal(stack.getSize(), 1)
            stack.push(1)
            assert.equal(stack.getSize(), 2)
        })
    })
    it('push & pop & peek', () => {
        const stack = new CStack()
        it('push 是向栈顶添加元素', () => {
            stack.push(0)
            stack.push(1)
            assert.equal(stack.peek(), 1)
        })
        it('pop 是从栈顶移除元素', () => {
            stack.push(2)
            stack.push(3)
            assert.equal(stack.peek(), 3)
            assert.equal(stack.pop(), 3)
            assert.equal(stack.peek(), 2)

        })
    })
    it('toString 打印一遍栈', () => {
        const stack = new CStack()
        stack.push(0)
        stack.push(1)
        stack.push(2)
        stack.push(3)
        console.log(stack.toString())
    })
})
