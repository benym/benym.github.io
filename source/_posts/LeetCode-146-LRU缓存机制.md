---
title: LeetCode-146-LRU缓存机制
date: 2020/8/4 09:32:57
description: LRU缓存机制
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-146-LRU缓存机制

运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

**进阶:**

你是否可以在 **O(1)** 时间复杂度内完成这两种操作？

<!--more-->

**示例1：**

```
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```

### 解题思路

**方法1、队列+哈希表：**

观察示例可知，当执行get(1)之后，后加入的key为2的数据会变为**最久没有使用**的

不难知道，在get操作之后需要对数据进行重排。而put操作也将依赖与重排的逻辑进行操作

这里选择先进先出的Queue作为重排的容器比较合适。

首先需要记录初始化的容量`capacity`

1. 每进行一次put，队列中也会加入key，map中也会加入key，value，同时容量减1
2. 当容量为0时，需要删除map中**最久没有使用**的key，value，再添加新的key，value

如果get的时候能够保证queue头部存储的**最久没有使用**的key，那么这一步操作就变得很简单。只需要如下操作即可。

```java
map.remove(queue.poll());
queue.add(key);
map.put(key,value);
```

那么如何让get操作，保证queue的头部存储的**最久没有使用**的key呢？

想要实现这样的queue，换一种思路，使用了(get)之后的key应该放在队列的最后

那么当查找一个key的时候，通过判断queue是否有这个key来进行get操作

- 当有这个key的时候，将这个key拿出来，然后放到queue末尾，之后返回map中获得key的结果即可。
- 如果没有这个key，返回-1即可。

回到`put`函数这里，除了put中的1、2两个操作之外，还需要考虑第3种情况

3. 如果put的过程中queue中有这个key，即put[1,2]之后又put[1,5]这种情况仅仅value不同，key相同，需要删除原本queue中的key，再添加新的key，因为put同一个key的操作或许不是连续的。同时需要更新map的key和value

**方法2、哈希表+双向链表：**

原文链接：https://leetcode-cn.com/problems/lru-cache/solution/lruhuan-cun-ji-zhi-by-leetcode-solution/

**利用LinkedHashMap，不利用LinkedHashMap两个版本**

LRU 缓存机制可以通过哈希表辅以双向链表实现，我们用一个哈希表和一个双向链表维护所有在缓存中的键值对。

- 双向链表按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的。

- 哈希表即为普通的哈希映射（HashMap），通过缓存数据的键映射到其在双向链表中的位置。


这样以来，我们首先使用哈希表进行定位，找出缓存项在双向链表中的位置，随后将其移动到双向链表的头部，即可在 `O(1)` 的时间内完成 `get `或者 `put` 操作。具体的方法如下：

- 对于 `get` 操作，首先判断 `key `是否存在：
  - 如果 `key` 不存在，则返回−1；
  - 如果 `key `存在，则 `key `对应的节点是最近被使用的节点。通过哈希表定位到该节点在双向链表中的位置，并将其移动到双向链表的头部，最后返回该节点的值。

- 对于 `put` 操作，首先判断` key `是否存在：
  - 如果` key` 不存在，使用` key `和 `value `创建一个新的节点，在双向链表的头部添加该节点，并将 `key `和该节点添加进哈希表中。然后判断双向链表的节点数是否超出容量，如果超出容量，则删除双向链表的尾部节点，并删除哈希表中对应的项；
  - 如果 `key `存在，则与 `get `操作类似，先通过哈希表定位，再将对应的节点的值更新为 `value`，并将该节点移到双向链表的头部。

上述各项操作中，访问哈希表的时间复杂度为 O(1)，在双向链表的头部添加节点、在双向链表的尾部删除节点的复杂度也为 O(1)。而将一个节点移到双向链表的头部，可以分成「删除该节点」和「在双向链表的头部添加节点」两步操作，都可以在O(1) 时间内完成。

**小贴士**

在双向链表的实现中，使用一个**伪头部**（dummy head）和**伪尾部**（dummy tail）标记界限，这样在添加节点和删除节点的时候就不需要检查相邻的节点是否存在。

### Java代码1

```java
class LRUCache {
    Queue<Integer> queue;
    HashMap<Integer,Integer> map;
    int capacity;
    public LRUCache(int capacity) {
        this.map = new HashMap<>();
        this.queue = new LinkedList<>();
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(queue.contains(key)){
            queue.remove(key);
            queue.add(key);
            return map.get(key);
        }else{
            return -1;
        }
    }
    
    public void put(int key, int value) {
        if(queue.contains(key)){
            queue.remove(key);
            queue.add(key);
            map.put(key,value);
        }
        else if(capacity==0){
            map.remove(queue.poll());
            queue.add(key);
            map.put(key,value);
        }else{
            queue.add(key);
            map.put(key,value);
            capacity--;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```

### Java代码2

```java
class LRUCache {
    private int cap;
	private Map<Integer, Integer> map = new LinkedHashMap<>();  // 保持插入顺序

	public LRUCache(int capacity) {
		this.cap = capacity;
	}

	public int get(int key) {
		if (map.keySet().contains(key)) {
			int value = map.get(key);
			map.remove(key);
            // 保证每次查询后，都在末尾
			map.put(key, value);
			return value;
		}
		return -1;
	}

	public void put(int key, int value) {
		if (map.keySet().contains(key)) {
			map.remove(key);
		} else if (map.size() == cap) {
			Iterator<Map.Entry<Integer, Integer>> iterator = map.entrySet().iterator();
			iterator.next();
			iterator.remove();
		}
		map.put(key, value);
	}
}
```

### Java代码3

完全手动实现LinkedHashMap

```java
public class LRUCache {
    class DLinkedNode {
        int key;
        int value;
        DLinkedNode prev;
        DLinkedNode next;
        public DLinkedNode() {}
        public DLinkedNode(int _key, int _value) {key = _key; value = _value;}
    }

    private Map<Integer, DLinkedNode> cache = new HashMap<Integer, DLinkedNode>();
    private int size;
    private int capacity;
    private DLinkedNode head, tail;

    public LRUCache(int capacity) {
        this.size = 0;
        this.capacity = capacity;
        // 使用伪头部和伪尾部节点
        head = new DLinkedNode();
        tail = new DLinkedNode();
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        DLinkedNode node = cache.get(key);
        if (node == null) {
            return -1;
        }
        // 如果 key 存在，先通过哈希表定位，再移到头部
        moveToHead(node);
        return node.value;
    }

    public void put(int key, int value) {
        DLinkedNode node = cache.get(key);
        if (node == null) {
            // 如果 key 不存在，创建一个新的节点
            DLinkedNode newNode = new DLinkedNode(key, value);
            // 添加进哈希表
            cache.put(key, newNode);
            // 添加至双向链表的头部
            addToHead(newNode);
            ++size;
            if (size > capacity) {
                // 如果超出容量，删除双向链表的尾部节点
                DLinkedNode tail = removeTail();
                // 删除哈希表中对应的项
                cache.remove(tail.key);
                --size;
            }
        }
        else {
            // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
            node.value = value;
            moveToHead(node);
        }
    }

    private void addToHead(DLinkedNode node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(DLinkedNode node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void moveToHead(DLinkedNode node) {
        removeNode(node);
        addToHead(node);
    }

    private DLinkedNode removeTail() {
        DLinkedNode res = tail.prev;
        removeNode(res);
        return res;
    }
}
```

