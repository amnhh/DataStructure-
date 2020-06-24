export default function binarySearch(arr: number[], n: number, target: number): number {
    // 明确 l 和 r 的定义 => 在 [l, ..., r] 中寻找 target
    let l = 0, r = n - 1;

    // 这里看为什么是 <= 而不是 <
    // 因为我们想要 [l, ..., r] 中寻找，而 l === r 时，也是一次合理的寻找
    // 所以这里是 <=
    while (l <= r) {
        const mid: number = Math.floor((l + r) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] > target) r = mid - 1
        else l = mid + 1
    }

    return -1
}
