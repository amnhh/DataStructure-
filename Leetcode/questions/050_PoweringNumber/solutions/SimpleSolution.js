"use strict";
/**
 * @title 普通解法
 *
 * @index 1
 *
 * @trainOfThought
 *  连续使 n 个 x 相乘
 *
 * @complexAnalysis
 *  O(n)
 *
 *
 * 会超出时间限制
 */
exports.__esModule = true;
function SimpleSolution(x, n) {
    if (n === 0)
        return 1;
    var ret = 1;
    while (n !== 0) {
        if (n > 0) {
            ret *= x;
            n--;
        }
        else {
            ret /= x;
            n++;
        }
    }
    return ret;
}
exports["default"] = SimpleSolution;
