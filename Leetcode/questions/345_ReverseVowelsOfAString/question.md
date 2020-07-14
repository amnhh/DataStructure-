## 345. 反转字符串中的元音字母

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

```
示例 1:

输入: "hello"
输出: "holle"
```

```
示例 2:

输入: "leetcode"
输出: "leotcede"
```

说明:
元音字母不包含字母"y"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 关键点

1. 元音字母，包含 a, e, i, o, u
2. 其他位置保持不变
3. 需要区分大小写，不能直接全部化小写
