import IMyArray from './interface'

const INDEX_OUT_OF_LIMIT = '索引应该 (<= size) && (>= 0)'

export default class MyArray<T> implements IMyArray <T> {
    data: Array<T>
    size: number = 0

    constructor(capacity: number = 10) {
        this.data = new Array(capacity)
    }

    getSize(): number {
        return this.size
    }

    getCapacity(): number {
        return this.data.length
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    add(_data: T, idx: number): void {
        if (idx < 0 || idx > this.size) {
            throw new Error(`[插入元素 ~ add]：${INDEX_OUT_OF_LIMIT}`)
        }
        if (this.size === this.data.length) {
            this.resize(2 * this.data.length)
        }

        // 这里我们选择倒着来，是因为我们需要用 [i] 去 赋值 [i + 1]
        // 而正着来的话，我们总会有一个空缺的地方，我们需要一个中间值 tmp
        // 并且需要关注后续的两位
        // let tmp: T = this.data[idx]

        // for (let i: number = idx; i >= this.size - 1; i ++) {
        //   this.data[i + 1] = tmp
        //   tmp = this.data[i + 2]
        // }

        for (let i: number = this.size - 1; i >= idx; i --) {
            this.data[i + 1] = this.data[i]
        }

        this.data[idx] = _data
        this.size ++
    }

    addFirst(_data: T): void {
        this.add(_data, 0)
    }

    addLast(_data: T): void {
        this.add(_data, this.size)
    }

    toString(): void {
        console.log(this.data)
    }

    set(_data: T, idx: number): void {
        if(idx < 0 || idx >= this.size) {
            throw new Error(`[设置值 ~ set]: ${INDEX_OUT_OF_LIMIT}`)
        }
        this.data[idx] = _data
    }

    get(idx: number): T {
        if (idx < 0 || idx >= this.size) {
            throw new Error(`[取值 ~ get]: ${INDEX_OUT_OF_LIMIT}`)
        }
        return this.data[idx]
    }

    contains(_data: T): boolean {
        for (let i: number = 0; i < this.size; i ++) {
            if (this.data[i] === _data) return true
        }
        return false
    }

    find(_data: T): number {
        for (let i: number = 0; i < this.size; i ++) {
            if (this.data[i] === _data) return i
        }
        return -1
    }

    remove(idx: number): T {
        if (idx < 0 || idx >= this.size) {
            throw new Error(`[移除元素 ~ remove]: ${INDEX_OUT_OF_LIMIT}`)
        }

        const result: T = this.data[idx]

        // 所有后驱元素全部前移一位
        for (let i: number = idx; i < this.size; i ++) {
            this.data[i] = this.data[i + 1]
        }

        this.size --

        // 在定义好 resize 之后，我们可以在元素个数小于目前数组总长度的 1/4 时
        // 将数组的容量缩小
        if (this.size <= this.data.length / 4) {
            this.resize(Math.floor(this.data.length / 2))
        }

        return result
    }

    removeFirst(): T {
        return this.remove(0)
    }

    removeLast(): T {
        return this.remove(this.size - 1)
    }

    removeElement(_data: T): void {
        const idx: number = this.find(_data)
        if (idx !== -1) {
            this.remove(idx)
        }
    }

    resize(newCapacity: number): void {
        // 声明新的长度的数组 -> 旧数组的元素全部拷贝过去
        const newData: Array<T> = new Array(newCapacity)
        for (let i: number = 0; i < this.size; i ++) {
            newData[i] = this.data[i]
        }
        this.data = newData
    }
}
