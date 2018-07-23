---
title: finally异常处理
date: 2018年7月23日 19:51:46
categories: 
- Python
tags: 
- python异常处理
---

### finally异常处理

## 代码

```python
import sys
import time

f = None
try:
    f = open("poem.txt")
    # 我们常用的文件阅读风格
    while True:
        line = f.readline()
        if len(line) == 0:
            break
        print(line, end='')
        sys.stdout.flush()
        print("Press ctrl+c now")
        # 为了确保它能运行一段时间
        time.sleep(2)  # time.sleep 函数任意在每打印一行后插入两秒休眠
except IOError:
    print("Could not find file poem.txt")
except KeyboardInterrupt:
    print("!! You cancelled the reading from the file.")
finally:  # 始终执行
    if f:
        f.close()
    print("(Cleaning up: Closed the file)")
```

## 运行结果

```bash
12165456478Press ctrl+c now
(Cleaning up: Closed the file)
```

