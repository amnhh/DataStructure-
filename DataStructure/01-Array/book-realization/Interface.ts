export default interface IArray {
    size: number
    capacity: number
    data: number[]

    /**
     * ------
     * 「实例属性获取类」方法
     * ------
     */

    /**
     * 获取当前已有的元素数目
     *
     * @desc 报告数组当前的规模
     */
    getSize(): number

    /**
     * 数组是否为空
     */
    isEmpty(): boolean

    /**
     * 获取当前容量
     */
    getCapacity(): number

    /**
     * ------
     * 「排序类」方法
     * ------
     */

    /**
     * 选择排序
     */
    selectionSort(): void

    /**
     * 冒泡排序
     */
    bubbleSort(): void

    /**
     * 交换次序
     * @param leftIdx
     * @param rightIdx
     */
    swap(leftIdx: number, rightIdx: number): void

    /**
     * 归并排序
     */
    mergeSort(leftIdx: number, rightIdx: number): void

    /**
     * 归并排序的 merge
     * @param leftIdx
     * @param midIdx
     * @param rightIdx
     */
    merge(leftIdx: number, midIdx: number, rightIdx: number): void

    /**
     * 快速排序
     * @param lowIdx
     * @param highIdx
     */
    quickSort(lowIdx: number, highIdx: number): void

    /**
     * 堆排序
     */
    heapSort(lowIdx: number, highIdx: number): void

    /**
     * 打乱数组
     */
    unsort(): void

    /**
     * 数组是否已经有序
     */
    isOrdered(): boolean

    /**
     * ------
     * 增删改查类方法
     * ------
     */

    /**
     * 获取索引为 r 的元素
     */
    get(r: number): number

    /**
     * 用 e 替换索引为 r 的数值
     */
    set(r: number, e: number): void

    /**
     * 将 e 插入到索引为 r 的位置上，其他的后继元素依次向后挪
     */
    insert(r: number, e: number): void

    /**
     * 头部插入
     * @param e
     */
    insertStart(e: number): void

    /**
     * 尾部插入
     * @param e
     */
    insertEnd(e: number): void

    /**
     * 查找元素 => 无序向量
     */
    find(e: number): number

    /**
     * 查找元素 => 有序向量
     * 查找目标元素 e，返回不大于 e，且索引值最大的元素
     */
    search(e: number): number

    /**
     * 删除元素
     * @param idx
     */
    remove(idx: number): void

    /**
     * ------
     * 「去重类」方法
     * ------
     */

    /**
     * 数组去重 => 无序向量
     */
    deduplicate(): void

    /**
     * 数组去重 => 有序向量
     */
    uniquify(): void

    /**
     * ------
     * 「扩容 & 缩容类」方法
     * ------
     */

    /**
     * 扩容
     */
    expand(): void

    /**
     * 缩容
     */
    shrink(): void

    /**
     * 「遍历类」方法
     */

    /**
     * 正向遍历
     */
    traverse(cb: Function): void

    /**
     * 逆向遍历
     * @param cb
     */
    traverseReverse(cb: Function): void
}
