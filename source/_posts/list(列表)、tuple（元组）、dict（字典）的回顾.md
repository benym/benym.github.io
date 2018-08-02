---
title: list(列表)、tuple（元组）、dict（字典）的回顾
date: 2018/7/25 20:57:55
categories:
- Python
tags:
- 基本教程
---

### list(列表)、tuple（元组）、dict（字典）的回顾

## 代码

```python
list1 = [5, 6, 87, 671, 3, 54, 67, 0, 1, -6, -7]

# 升序排序

list1.sort()
print(list1)

# 降序排序
list1.sort(reverse=True)
print(list1)

# 列表和元组之间相互转换
print(type(list1))

# 1、列表转换成元组
num_tuple = tuple(list1)
print(type(num_tuple))

# 2 、元组转换成列表
num2_list = list(num_tuple)
print(type(num2_list))

# 字典的使用
# 1、取值
dict_test = {"name": "xxx"}
print(dict_test["name"])

# 2、增加/修改
dict_test["age"] = 18  # 增加
dict_test["name"] = "yyy"  # 修改
print(dict_test)
# 3、删除
dict_test.pop("name")
print(dict_test)
# 4、统计键值对的数量
print(len(dict_test))
# 5、合并字典
# 如果被合并的字典中包含已经存在的键值对，会覆盖原有的键值对
temp_dict = {"height": 123,
             "age": 20}
dict_test.update(temp_dict)
print(dict_test)
# 6、清空字典
dict_test.clear()
print(dict_test)
# 7、迭代遍历字典
# 变量k是每次循环中，获取到的键值对的值
new_dict = {"name": "xxx",
            "age": 20,
            "height": 200}
for k in new_dict:
    print("{} - {}".format(k, new_dict[k]))
# 8、列表中保存多个字典,并用for循环迭代输出
list2 = [
    {"name": "qqq",
     "email": "163",
     "phone": 119},
    {"name": "sss",
     "email": "cc",
     "phone": 110}
]
for i in list2:
    print(i)
```

<!--more-->

## 运行结果

```
[-7, -6, 0, 1, 3, 5, 6, 54, 67, 87, 671]
[671, 87, 67, 54, 6, 5, 3, 1, 0, -6, -7]
<class 'list'>
<class 'tuple'>
<class 'list'>
xxx
{'age': 18, 'name': 'yyy'}
{'age': 18}
1
{'age': 20, 'height': 123}
{}
age - 20
name - xxx
height - 200
{'phone': 119, 'name': 'qqq', 'email': '163'}
{'phone': 110, 'name': 'sss', 'email': 'cc'}
```

## 总结

总结：

list使用的是方括号，类似与数组结构，
tuple元组使用的是圆括号，跟list类似但是数据不能进行修改，
所以应用的场景基本上用在需要数据存储，或者是需要保证数据安全无法修改的情况，
字典用的是大括号，是key-value结构的, 操作数据的时候，是操作key，而不是索引。