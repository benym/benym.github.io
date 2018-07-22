---
title: python中的集合
date: 2018年7月7日 17:34:06
categories: 
- Python
tags: 
- 基本教程

---

### 集合

集合（Set）是简单对象的无序集合（Collection）。当集合中的项目存在与否比起次序或其出
现次数更加重要时，我们就会使用集合。
通过使用集合，你可以测试某些对象的资格或情况，检查它们是否是其它集合的子集，找到
两个集合的交集，等等。

## 代码

```python
# 集合    判断子集

bri = set(['brazil', 'russia', 'india'])

if 'india' in bri:
    print('True')
if 'usa' in bri:
    print('False')
bric = bri.copy()
bric.add('china')
print(bric.issuperset(bri))
bri.remove('russia')
print(bri & bric)
```

## 输出结果

True
True
{'india', 'brazil'}