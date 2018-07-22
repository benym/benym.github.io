---
title: python中字典（key-value）
date: 2018年7月7日 17:25:27
categories: 
- Python
tags: 
- 基本教程

---

### 字典（key-value）

字典就像一本地址簿，如果你知道了他或她的姓名，你就可以在这里找到其地址或是能够联
系上对方的更多详细信息，换言之，我们将键值（Keys）（即姓名）与值（Values）（即地
址等详细信息）联立到一起。在这里要注意到键值必须是唯一的，正如在现实中面对两个完
全同名的人你没办法找出有关他们的正确信息。

## 代码

```python
# 字典
# "ab"是地址（Address）薄(Book)的缩写

ab = {
    'Swaroop': 'swaroop@swaroopch.com',
    'Larry': 'larry@wall.org',
    'Matsumoto': 'matz@ruby-lang.org',
    'Spammer': 'spammer@hptmail.com'
}

print("Swaroop's address is", ab['Swaroop'])

# 删除一对键值-值配对
del ab['Spammer']

print('\nThere are {} contacts in the address-book\n'.format(len(ab)))

#我们通过使用字典的  item  方法来访问字典中的每一对键值—值配对信息，这一操作将返回一份包含元组的列表

for name, address in ab.items():
    print('Contact {} at {}'.format(name, address))

# 添加一对键值-值配对
ab['Guido'] = 'guido@python.org'

if 'Guido' in ab:
    print("\nGuido's address is", ab['Guido'])
```

