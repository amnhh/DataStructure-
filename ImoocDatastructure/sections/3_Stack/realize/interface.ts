export default interface IStack <T> {
    /**
     * 出栈
     * @param v
     */
    push(v: T): void

    /**
     * 进栈
     */
    pop(): T

    /**
     * 查看栈顶元素
     */
    peek(): T

    /**
     * 栈的容量
     */
    getSize(): number

    /**
     * 是否为空
     */
    isEmpty(): boolean
}
