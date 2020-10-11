## 203 删除链表的元素

删除链表中等于给定值 val 的所有节点。

示例:

```ts
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```

已知链表节点数据结构定义：

```ts
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}