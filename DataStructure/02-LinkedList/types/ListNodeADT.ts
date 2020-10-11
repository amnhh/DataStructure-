export default interface IListNode<T = number> {
  
  /**
   * 内置的变量
   */
  data: T

  /**
   * 前驱位置
   */
  pred: IListNode<T | null>
  
  /**
   * 后继位置
   */
  succ: IListNode<T | null>

  /**
   * 以前驱节点插入
   */
  insertAsPred (item: T): IListNode<T>

  /**
   * 以后继节点插入
   */
  insertAsSucc (item: T): IListNode<T>
}