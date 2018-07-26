---
title: python中完整for循环的实际运用
date: 2018年7月26日 20:44:17
categories:
- Python
tags:
- 基本教程
---

### python中完整for循环的实际运用

## 代码

```python
# 完整的for循环的实际应用  for...else结构

students = [
    {"name": "xx"},
    {"name": "yy"}
]
# 在学院列表中搜索指定的姓名
find_name = "SS"

for i in students:
    print(i)
    if i["name"] == find_name:
        print("找到了 {}".format(find_name))

        # 如果已经找到，应该直接退出循环，而不再遍历后续的元素
    # 如果把这个else写在if语句之后的话，每次没有找到就要输出一次，这是不对的！
        break
else:
    print("没有找到{}".format(find_name))
print("循环结束")
```

## 运行结果

```
{'name': 'xx'}
{'name': 'yy'}
没有找到SS
循环结束
```

