import { ListNode } from '../../../../types/solution' ;

function removeElements(head: ListNode | null, val: number): ListNode | null {  
  // 设置一个虚拟的头结点，并将其 next 指针指向 head
  const dynamicHead = new ListNode()
  dynamicHead.next = head
  let cur = dynamicHead

  // 寻找值等于 val 的前驱节点，并删除其后继节点
  while (cur && cur.next) {
      if (cur.next.val === val) cur.next = cur.next.next
      else cur = cur.next
  }

  // 最终的返回值总为 dynamicHead.next
  return dynamicHead.next
};

export default removeElements