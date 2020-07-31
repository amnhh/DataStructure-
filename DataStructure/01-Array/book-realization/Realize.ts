import IArray from './Interface'

export default class MyArray implements IArray {
    // 数据集合
    data: Array<number> = []

    // 容量
    capacity: number = 0

    size: number = 0

    // 构造器
    constructor(capacity: number, initValue: number = 0) {
        this.data = new Array<number>()
        this.capacity = capacity

        for (; this.size < capacity; this._size ++) {
            this.data[this.size] = initValue
        }
    }

    /**
     * 元素总和
     *
     * @desc 报告数组当前的规模
     */
    getSize(): number {
        return this.size
    }

    /**
     * 获取索引为 r 的元素
     */
    get(r: number): number {
        return this.data[r]
    }

    /**
     * 用 e 替换索引为 r 的数值
     */
    put(r: number, e: number): void {
        this.data[r] = e
    }

    /**
     * 将 e 插入到索引为 r 的位置上，其他的后继元素依次向后挪
     */
    insert(r: number, e: number): void {

    }

    /**
     * 判断是否数组已有序
     */
    disordered(): boolean {}

    /**
     * 升序排列
     */
    sort(): void {}

    /**
     * 找到值为 e 的元素
     * 存在两个或两个以上时，会返回最大的索引
     */
    find(e: T): number {}

    /**
     * 查找目标元素 e，返回不大于 e，且索引值最大的元素
     *
     * @desc 该方法，就是为了找到如果说想要将 e 插入到该数组，该插入到哪里
     */
    search(e: T): number {}

    /**
     * 剔除重复的元素
     *
     * @desc 针对的是无序数组
     */
    deduplicate(): void {}

    /**
     * 剔除重复的元素
     *
     * @desc 针对有序数组
     */
    uniquify(): void {}

    /**
     * 遍历数组，数组中的元素全部执行 cb 方法
     */
    traverse(cb: Function): void {}
}
