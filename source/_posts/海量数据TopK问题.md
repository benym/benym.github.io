---

title: 海量数据TopK问题
date: 2020/6/29 16:18:11
description: 总结
categories: Java
tags: 
- TopK
- Java
keywords: TopK,Java
---

## 海量数据TopK问题

在大规模数据处理中，经常会遇到这类问题：在海量数据中找到出现频率/数值最大的前K个数

本文主要提供这类问题的基本解决方法

 <!--more-->

假设这样一个场景，一个问题阅读量越高，说明这个问题越有价值，越应该推送给用户

假设数据量有1亿，取Top100

1. 最容易想到的方法是将全部数据进行**排序**，但如果数据量太大 ，这显然是不能接受的。
2. 第二种方法为**局部淘汰法**，该方法与排序方法类似，用一个容器保存前K个数，然后将剩余的所有数字——与容器内的最小数字相比，如果所有后续的元素都比容器内的K个数还小，那么容器内这个K个数就是最大K个数。如果某一后续元素比容器内最小数字大，则删掉容器内最小元素，并将该元素插入容器，最后遍历完这1亿个数，得到的结果容器中保存的数即为最终结果了。此时的时间复杂度为O（n+m^2），其中m为容器的大小，即K。
3. 第三种方法是**分治法**，将1亿个数据分成100份，每份100万个数据，找到每份数据中最大的100个(即每份数据的TopK)，最后在剩下的100*100个数据里面找出最大的100个。如果100万数据选择足够理想，那么可以过滤掉1亿数据里面99%的数据。100万个数据里面查找最大的100个数据的方法如下：用快速排序的方法，将数据分为2堆，如果大的那堆个数N大于100个，继续对大堆快速排序一次分成2堆，如果大的那堆个数N大于100个，继续对大堆快速排序一次分成2堆，如果大堆个数N小于100个，就在小的那堆里面快速排序一次，找第100-n大的数字；递归以上过程，就可以找到第100大的数。参考上面的找出第100大数字，就可以类似的方法找到前100大数字了。
4. 第四种方法是**Hash法**。如果这1亿个数里面有很多重复的数，先通过Hash法，把这1亿个数字去重复，这样如果重复率很高的话，会减少很大的内存用量，从而缩小运算空间，然后通过分治法或最小堆法查找最大的100个数。
5. 第五种方法采用**最小堆**。首先读入前100个数来创建大小为100的最小堆，然后遍历后续的数字，并于堆顶（最小）数字进行比较。如果比最小的数小，则继续读取后续数字；如果比堆顶数字大，则替换堆顶元素并重新调整堆为最小堆。整个过程直至1亿个数全部遍历完为止。然后按照中序遍历的方式输出当前堆中的所有100个数字。建堆时间复杂度是O(m)，堆调整的时间复杂度是O(logm)，最终的时间复杂度=1次建堆的时间+n次堆调整的时间，所以该算法的时间复杂度为O(nlogm)，空间复杂度是100（常数）。

**代码示例：**

我们首先可以用HashMap去存储问题和阅读量的映射

```java
//伪代码
String read;
HashMap<String, Integer> map = new HashMap<String, Integer>();
while (fileStream.hasNext()){
    url = read();
   if (map.containsKey(read)){
        map.put(read,map.get(read)+1);
    }else{
        map.put(read, 1);
    }
}
```

之后， 我们使用长度为100的**最小堆**来找到最热的100条数据。

```java
PriorityQueue<Map.Entry<String, Integer>> queue =
    new PriorityQueue<Map.Entry<String, Integer>>(100,
           new Comparator<Map.Entry<String, Integer>>(){
            @Override public int compare(Entry<String, Integer> o1, Entry<String, Integer> o2) {
                return o1.getValue() - o2.getValue();
                }
        });
         
int k = 100;
for (Map.Entry<String, Integer> entry : map.entrySet()){
    if (queue.size() < k){
        queue.add(entry);
    } else {
        if (entry.getValue() > queue.peek().getValue()){
            queue.poll();
        	queue.add(entry);
        }
    }
}
```







