"use strict";
/**
 * @title 对撞指针解法
 *
 * @index 1
 *
 * @trainOfThought
 *  左右维护两个指针，分别交换后向中心靠拢
 *
 * @complexAnalysis
 *  时间：O(n)
 *  空间：O(1)
 *
 * @type
 *  对撞指针
 *
 * @category
 *  对撞指针
 *
 * @score 时间、内存消耗得分
 * 执行用时 104 ms 击败 93.19 %，内存消耗 42.1 mb 击败 100.00%
 */
exports.__esModule = true;
function TwoPointsSolution(s) {
    var i = 0, j = s.length - 1;
    while (i < j) {
        var tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
        i++;
        j--;
    }
    return s;
}
exports["default"] = TwoPointsSolution;
