import IListNode from '../types/ListNodeADT'

export default class ListNode<T> implements IListNode<T> {
  
  data: T

  pred: ListNode<T>

  succ: ListNode<T>

  constructor(data?: T) {
    this.data = data || null
  }

  insertAsPred(item: T): ListNode<T> {
    return new ListNode(item)
  }

  insertAsSucc(item: T): ListNode<T> {
    return new ListNode(item)
  }
}