### Merge Sort => 归并排序

#### 步骤 ~ Steps in Divide and Conquer

1. 分：Divide => 
    - Divide [0, n] into :
        + [0, n/2] 
        + (n/2, n]
    - Divide [0, n/2] and (n/2, n] into :
        + [0, n/4]
        + (n/4, n/2]
        + (n/2, 3n/4]
        + (3n/4, n]
    - ......
    - Divide [0], [1], [2], [3], ..., [n - 1], [n] 
2. 治：Conquer => Compare
3. 合并：Combine => Merge func. => Merge two sorted array.


