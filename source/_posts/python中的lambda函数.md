---
title: python中的lambda函数
date: 2018年7月24日 18:27:03
categories: 
- Python
tags: 
- python函数
---

### python中的lambda函数

lambda函数相当于定义了一个匿名的函数，减少了代码量

## 代码

```python
# Lambda表格  也是lambda函数
points = [{'x': 2, 'y': 3},
          {'x': 4, 'y': 1}]
points.sort(key=lambda i: i['y'])
print(points)
'''
要注意到一个 list 的 sort 方法可以获得一个 key 参数，
用以决定列表的排序方式（通常我们只知道升序与降序）。
在我们的案例中，我们希望进行一次自定义排序，为此我们需要编写一个函数，
但是又不是为函数编写一个独立的 def 块，只在这一个地方使用，因此我
们使用 Lambda 表达式来创建一个新函数。
'''

# lambda函数的其他使用方法
add = lambda x, y: x + y
print(add(1, 2))  # 结果为3
# 需求：将列表中的元素按照绝对值大小进行升序排列
list1 = [3, 5, -4, -1, 0, -2, -6]
print(sorted(list1, key=lambda x: abs(x)))


'''
等价于
def get_abs(x):
    return abs(x)

list1.sort(key=get_abs)
print(list1)

或者
def get_abs(x):
    return abs(x)
    
print(sorted(list1, key=get_abs))
'''
```

<!--more-->

## 运行结果

```
[{'y': 1, 'x': 4}, {'y': 3, 'x': 2}]
3
[0, -1, -2, 3, -4, 5, -6]
```

