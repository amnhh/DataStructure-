import IListNode from './ListNodeADT'

export default interface ILinkedList<T = number> {
  
  /**
   * 链表长度
   */
  _size: number

  /**
   * 头哨兵
   */
  header: IListNode<T>

  /**
   * 尾哨兵
   */
  trailer: IListNode<T>

  /**
   * 初始化方法
   */
  init (): void

  /**
   * 清除所有节点
   */
  clear(): void

  /**
   * 返回链表的长度
   */
  size(): number

  /**
   * 判空
   */
  empty(): boolean

  /**
   * 首节点
   */
  first(): IListNode<T>

  /**
   * 末节点
   */
  last(): IListNode<T>

  /**
   * 判断位置 p 对外界是否合法
   */
  valid(p: number): boolean

  /**
   * 判断是否已经有序
   */
  disordered(): boolean

  /**
   * 无序列表查找
   */
  find(e: T): IListNode<T>

  /**
   * 区间查找
   */
  find(e: T, limit: number, p: IListNode<T>): IListNode<T>

  /**
   * 有序查找
   */
  search(e: T): IListNode<T>

  /**
   * 遍历
   */
  traverse(): void
}