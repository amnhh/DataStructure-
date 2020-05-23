/**
 * 扫描 ts 的文件，将文件内容以 注释 + 源码的形式分割，返回解析结果
 *
 * 赋予注释一些特殊的标记，将标记映射到 markdown 的语法
 * 灵感来自于 jsdoc~
 *
 * example:
 *
 * input : @title 测试 title:
 * output: ### 测试
 *
 * input: @complex O(n):
 * output:
 * #### 复杂度
 *
 * O(n)
 */

export default function parse(dirpath: string): void {}
