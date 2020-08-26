/**
 * @title 个人解法
 *
 * @index 1
 *
 * @trainOfThought
 *  如题所说，依次的去对 l1 和 l2 的每一个元素进行访问。同时维护：
 *     overflow: 进1逻辑
 *     ret: 遍历中的next逻辑维护 => 感觉这里使用 cur 更合适些
 *     head: 负责提前持有 ret 的引用，在结果时返回
 *
 * @complexAnalysis
 *  时间 O(max(m + n))
 *
 * @type 普通依题意的迭代解法
 */
type ListNodeNext = ListNode | null

class ListNode {
    val: number
    next: ListNodeNext
    constructor (val?: number, next?: ListNodeNext) {
        this.val = val || 0
        this.next = next || null
    }
}

export default function AddTwoNumbers (l1: ListNodeNext, l2: ListNodeNext): ListNodeNext {
    let ret: ListNodeNext = new ListNode(0)
    const head: ListNodeNext = ret

    let overflow: number = 0

    while(l1 !== null || l2 !== null) {
        ret.next = resolveOverflow(l1, l2)
        nextLoop()
    }

    if (overflow) {
        ret.next = resolveOverflow()
    }

    return head.next


    function resolveOverflow(l1?: ListNodeNext, l2?: ListNodeNext): ListNode {
        l1 = l1 || { val: 0, next: null }
        l2 = l2 || { val: 0, next: null }

        let retOverflow = l1.val + l2.val + overflow

        if (retOverflow >= 10) {
            overflow = 1
            retOverflow -= 10
        } else {
            overflow = 0
        }

        return new ListNode(retOverflow)
    }

    function nextLoop(): void {
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        ret = (ret as ListNode).next
    }
}
