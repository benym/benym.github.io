---
title: python中的列表
date: 2018/7/7 17:19:37
categories: 
- Python
tags: 
- 基本教程
---

### 列表

列表  是一种用于保存一系列有序项目的集合，也就是说，你可以利用列表保存一串项目的序
列。想象起来也不难，你可以想象你有一张购物清单，上面列出了需要购买的商品，除开在
购物清单上你可能为每件物品都单独列一行，在 Python 中你需要在它们之间多加上一个逗
号。

## 代码

```python
# 列表
# This is my shopping list
'''
在这里要注意在调用  print  函数时我们使用  end  参数，这样就能通过一个空格来结束输出
工作，而不是通常的换行。
'''
shoplist = ['apple', 'mango', 'carrot', 'banana']

print('I have', len(shoplist), 'items to purchase')

print('These item are:', end=' ')
for item in shoplist:
    print(item, end=' ')

print('\nI also have to buy rice.')
shoplist.append('rice')
print('My shopping list is now', shoplist)

print('I will sort my list now')
shoplist.sort()
print('Sorted shopping list is', shoplist)

print('The first item I will buy is', shoplist[0])
olditem = shoplist[0]
del shoplist[0]
print('I bought the', olditem)
print('My shopping list is now', shoplist)
```