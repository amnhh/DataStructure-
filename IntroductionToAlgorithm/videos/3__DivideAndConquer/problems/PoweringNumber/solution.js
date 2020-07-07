function poweringNumber(x, n) {
    if (n === 1)
        return x;
    // divide
    var divide, isEven = n % 2 === 0;
    if (isEven)
        divide = n / 2;
    else
        divide = (n - 1) / 2;
    // conquer & recursive
    var conquer = poweringNumber(x, divide);
    // combine
    return isEven
        ? conquer * conquer
        : conquer * conquer * x;
}
