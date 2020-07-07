function poweringNumber(x: number, n: number): number {
    if (n === 1) return x
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
