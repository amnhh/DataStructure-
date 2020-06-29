"use strict";
/**
 * @title 标题
 *
 * @index 次序
 *
 * @trainOfThought 思路
 *
 * @complexAnalysis 复杂度分析
 *
 * @type 解法类型
 *
 * @note 笔记
 *
 * @remark 备注
 *
 * @category 想要分配到哪个大类下
 *
 * @score 时间、内存消耗得分
 * 执行用时击败 T ，内存消耗击败 T
 */
exports.__esModule = true;
function StackSolution(s) {
    var stack = [];
    var rightToLeftMap = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    for (var i = 0; i < s.length; i++) {
        var current = s[i];
        var match = rightToLeftMap[current];
        if (!match) {
            stack.push(current);
        }
        else {
            if (stack[stack.length - 1] !== match)
                return false;
            else
                stack.pop();
        }
    }
    return stack.length === 0;
}
exports["default"] = StackSolution;
