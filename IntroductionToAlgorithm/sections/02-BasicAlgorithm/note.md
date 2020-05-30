---
distTitle: 第二章 算法基础
innerParams:
    insertRealization: ../code/InsertionSort.ts --type=path
---

## 2.1 插入排序

### a. 伪代码：

```jsx
INSERTION SORT:
for j = 2 to A.length
	key = A[j]
	i = j - 1
	while i > 0 and A[i] > key
		A[i + 1] = A[i]
		i --
	A[i + 1] = key
```

几个需要注意的点：

1. 提前取出待插入项 `key`, 防止在后续的循环中丢失它的值
2. 每次外侧的 `j` 执行前，都保证 `[0, j - 1]` 为有序 ⇒ 循环不变式
3. 寻找合适的插入位置的过程，亦是比当前值大的元素后移的过程，两者在同一个 `while` 里边

### b. 关于循环不变式

用途：帮助我们理解算法的正确性

三条性质：

- 初始化：循环的第一次迭代前，它为真
- 保持：如果循环的某次迭代前它威震，则下次迭代前仍未真
- 终止：在循环终止时，循环不变式会为我们提供一个有用的性质，该性质有助于证明算法的正确性

### c. 实现

```
{{ insertRealizationPath }}
```
