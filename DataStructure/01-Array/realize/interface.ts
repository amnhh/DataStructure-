export default interface IMyArray <T> {
  // 数据结构
  data: Array<T>
  // size 其实代表的是当前数组中从左到右，第1位不包含元素的索引
  size: number

  /**
   * 获取当前数组的size
   */
  getSize(): number

  /**
   * 获取当前数组容量
   */
  getCapacity(): number
  
  /**
   * 判断数组是否为空
   */
  isEmpty(): boolean

  /**
   * 向数组的头部插入
   * @param data 需要添加的数据
   */
  addFirst(data: T): void

  /**
   * 向数组的尾部插入
   * @param data 需要添加的数据
   */
  addLast(data: T): void

  /**
   * 向数组的 `idx` 位置插入数据
   * @param data 需要插入的数据
   * @param idx 需要插入的位置
   */
  add(data: T, idx: number): void  

  /**
   * 简易打印
   */
  toString(): void

  /**
   * 直接将数组的 `idx` 位置设置为 data
   * @param data 需要设置的数据
   * @param idx 数据设置在某个位置中
   */
  set(data: T, idx: number): void

  /**
   * 获取索引为 `idx` 处的数据
   * @param idx 想要获取的索引
   */
  get(idx: number): T

  /**
   * 检测数据是否在这个数组中
   * @param data 待检测的数据
   */
  contains(data: T): boolean

  /**
   * 找到某个数据位于数组中的位置
   * 找到则返回具体的索引位置，没找到则返回 -1
   * @param data 想找的数据
   */
  find(data: T): number

  /**
   * 移除索引 `idx` 位置下的元素，并返回被移除的元素
   * @param idx 想移出的索引
   */
  remove(idx: number): T

  /**
   * 移除第一个元素
   */
  removeFirst(): T

  /**
   * 移除最后一个元素
   */
  removeLast(): T

  /**
   * 移除列表中值为 `data` 的数据
   * @param data 待移除的数据
   */
  removeElement(data: T): void

  /**
   * 数组容量 resize
   * @param newCapacity 新容量
   */
  resize(newCapacity: number): void
}