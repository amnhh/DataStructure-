function MergeSort (nums: number[]): number[] {
    const len = nums.length
    if (len < 2) return nums
    // 1. divide ~ find the mid, then you have two sub problems: left and right
    const mid: number = Math.floor(len / 2)

    // 2. conquer
    const left = MergeSort(nums.slice(0, mid))
    const right = MergeSort(nums.slice(mid, len))

    // 3. combine
    return merge(left, right)
}

function merge (leftList: number[], rightList: number[]): number[] {
    // 左数组的当前索引
    let l: number = leftList.length
    // 右数组的当前索引
    let r: number = rightList.length
    // 最终的数组的索引
    let k = l + r - 1

    // 我们想要将 r 个 rightList 的元素放入 leftList
    // 所以 r 消耗殆尽的时候，就代表着搬迁完成
    // 两个极端的情况：
    //  1. 前 r 次消耗的全是 rightList 中的元素，则会将 rightList 的元素依次填入到 leftList 的后方，符合题意
    //  2. 前 l 次消耗的全是 leftList 中的元素，则会将 leftList 全部搬迁到其最后，命中到 l === 0 这个判断后，依次写入 rightList 中的元素
    while (r) {
        if (l === 0 || leftList[l - 1] < rightList[r - 1]) {
            leftList[k--] = rightList[--r]
        } else {
            leftList[k--] = leftList[--l]
        }
    }

    return leftList
}
