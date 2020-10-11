import IListNode from '../types/ListNodeADT'
import ILinkedList from '../types/LinkedListADT'
import ListNode from './ListNode'

export default class LinkedList<T> implements ILinkedList<T> {
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

  init() {
    this.header = new ListNode()
    this.trailer = new ListNode()

    this.header.succ = this.trailer
    this.header.pred = null

    this.trailer.pred = this.header.succ
    this.trailer.succ = null

    this._size = 0
  }
}