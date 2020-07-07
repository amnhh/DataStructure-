function poweringNumber(x: number, n: number): number {
    // n > 0 时的跳出条件
    if (n === 1) return x
    // n < 0 时的跳出条件
    if (n === -1) return 1/x
    // n === 0 的输入的返回值
    if (n === 0) return 1
    // divide
    let divide,
        isEven = n % 2 === 0
    if (isEven) divide = n / 2
    else divide = (n - 1) / 2
    // conquer & recursive
    let conquer = poweringNumber(x, divide)

    // combine
    return isEven
        ? conquer * conquer
        : conquer * conquer * x
}
