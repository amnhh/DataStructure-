import { ListNode } from '../../../../types/solution' ;

function removeElements(head: ListNode | null, val: number): ListNode | null {  
  // 跳出条件
  if (head === null) return null

  // 递过去 => 缩小问题的规模
  head.next = removeElements(head.next, val)
  // 归回来时判断是否需要接上 head, 也就是我们的递推公式
  return head.val === val ? head.next : head
};