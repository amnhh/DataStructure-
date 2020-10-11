import { ListNode } from '../../../../types/solution' ;

function removeElements(head: ListNode | null, val: number): ListNode | null {  
  // 找到第一个不等于 val 的节点
  while (head && head.val === val) {
    head = head.next
  }
  // 如果此时整条链表为空，则直接返回
  if (head === null) {
    return head;
  }
  
  let cur = head
  // 遍历 => 终止条件应该是 cur.next = null
  // 如果遍历到 cur.next 为 val, 则 cur.next = cur.next.next
  while (cur && cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};

export default removeElements