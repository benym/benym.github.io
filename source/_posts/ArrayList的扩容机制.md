---

title: ArrayList的扩容机制
date: 2020/7/7 10:20:55
description: 总结
categories: Java
tags: 
- Java
keywords: Java
---

## ArrayList的扩容机制

ArrayList是List接口的实现类，能够根据需要动态增长数组，本文通过分析源码，总结ArrayList的扩容机制

 <!--more-->

### ArrayList构造函数

在ArrayList中有3种方法进行初始化，构造方法源码如下

```java
    /**
     * Default initial capacity. 默认初始容量大小
     */
    private static final int DEFAULT_CAPACITY = 10;

    /**
     * Shared empty array instance used for empty instances.
     */
    private static final Object[] EMPTY_ELEMENTDATA = {};

    /**
     * Shared empty array instance used for default sized empty instances. We
     * distinguish this from EMPTY_ELEMENTDATA to know how much to inflate when
     * first element is added.
     */
    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

    /**
     * The array buffer into which the elements of the ArrayList are stored.
     * The capacity of the ArrayList is the length of this array buffer. Any
     * empty ArrayList with elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA
     * will be expanded to DEFAULT_CAPACITY when the first element is added.
     */
    transient Object[] elementData; // non-private to simplify nested class access

    /**
     * The size of the ArrayList (the number of elements it contains).
     *
     * @serial
     */
    private int size;

	/**
	 * 带初始容量参数的构造方法，容量由用户指定
	 */
    public ArrayList(int initialCapacity) {
        if (initialCapacity > 0) { // 初始容量大于0
            // 创建initialCapacity大小的数组
            this.elementData = new Object[initialCapacity];
        } else if (initialCapacity == 0) { // 初始容量等于0
            // 创建空数组
            this.elementData = EMPTY_ELEMENTDATA;
        } else { // 初始容量小于0，抛出异常
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        }
    }

    /**
     * Constructs an empty list with an initial capacity of ten.
     * 默认构造函数，使用初始容量10构造一个空列表(无参数构造)
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }

    /**
     * Constructs a list containing the elements of the specified
     * collection, in the order they are returned by the collection's
     * iterator.
     * 构造包含指定collection元素的列表，这些元素利用该集合的迭代器按顺序返回
     * 如果指定的集合为null，抛出空指针异常
     * @param c the collection whose elements are to be placed into this list
     * @throws NullPointerException if the specified collection is null
     */
    public ArrayList(Collection<? extends E> c) {
        elementData = c.toArray();
        if ((size = elementData.length) != 0) {
            // c.toArray might (incorrectly) not return Object[] (see 6260652)
            if (elementData.getClass() != Object[].class)
                elementData = Arrays.copyOf(elementData, size, Object[].class);
        } else {
            // replace with empty array.
            this.elementData = EMPTY_ELEMENTDATA;
        }
    }
```

在无参构造方法中，创建ArrayList实际上是初始化一个空数组。

**EMPTY_ELEMENTDATA**常量数组为空实例共享一个空数组

**DEFAULTCAPACITY_EMPTY_ELEMENTDATA**常量数组，与**EMPTY_ELEMENTDATA**不同，用于默认大小的空实例的共享空数组实例。将其与EMPTY_ELEMENTDATA区分开来，以便知道添加第一个元素时需要扩容多少。当真正对数组进行添加元素操作的时候，才真正分配容量。即向数组中添加第一个元素时，数组容量扩为10

### 1.Add方法

```java
    /**
     * Appends the specified element to the end of this list.
     * 将指定的元素追加到此列表的末尾
     * @param e element to be appended to this list
     * @return <tt>true</tt> (as specified by {@link Collection#add})
     */
    public boolean add(E e) {
    // 添加元素之前，先调用ensureCapacityInternal方法
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        // 在ArrayList添加元素的实质，相当于为数组赋值
        elementData[size++] = e;
        return true;
    }
```

###2.ensureCapacityInternal()方法

在add方法中，调用了ensureCapacityInternal(size + 1)，ensureCapacityInternal源码如下

```java
    private void ensureCapacityInternal(int minCapacity) {
        ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
    }
```

在源码中，又调用了calculateCapacity和ensureExplicitCapacity方法

###3.calculateCapacity()方法

calculateCapacity传入一个数组和最小扩容量，**计算扩容量的值**

```java
    private static int calculateCapacity(Object[] elementData, int minCapacity) {
        if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
            // 获取默认的容量和传入参数的较大值
            return Math.max(DEFAULT_CAPACITY, minCapacity);
        }
        return minCapacity;
    }
```

当要add第一个元素时，数组的size为0，传入的参数为size+1，所以minCapacity为1，在Math.max方法比较后，minCapacity变为10，之后将minCapacity返回，执行ensureExplicitCapacity()方法

### 4.ensureExplicitCapacity()方法

当第1次add的时候，从上一个返回接回10，作为minCapacity的初始值，由于`minCapacity-elementData.length > 0`所以会进入到grow(minCapacity)方法

此后，当添加2，3，......，10个元素时，由于数组容量足够大，都不会进行grow方法扩容

而当添加第11个元素时，`minCapacity - elementData.length > 0`成立，再次进行扩容

```java
    //  判断是否需要扩容
    private void ensureExplicitCapacity(int minCapacity) {
        modCount++;

        // overflow-conscious code
        if (minCapacity - elementData.length > 0)
            // 调用grow方法进行扩容，调用此方法代表已经开始扩容了
            grow(minCapacity);
    }
```

### 5.grow()方法

```java
    // 要分配的最大数组大小
    private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;
    
    /**
     * Increases the capacity to ensure that it can hold at least the
     * number of elements specified by the minimum capacity argument.
     * 增加容量，以确保它至少可以容纳最小容量参数指定的元素数量。
     * ArrayList扩容的核心方法
     * @param minCapacity the desired minimum capacity
     */
    private void grow(int minCapacity) {
        // overflow-conscious code
        // oldCapacity为旧容量，newCapacity为新容量
        int oldCapacity = elementData.length;
        // 将oldCapacity右移一位，其效果相当于oldCapacity/2
        // 位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍
        int newCapacity = oldCapacity + (oldCapacity >> 1);
        // 然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量
        if (newCapacity - minCapacity < 0)
            newCapacity = minCapacity;
        // 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) `hugeCapacity()` 方法来比较 minCapacity 和 MAX_ARRAY_SIZE
        // 如果minCapacity大于最大容量，则新容量则为`Integer.MAX_VALUE`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 `Integer.MAX_VALUE - 8`
        if (newCapacity - MAX_ARRAY_SIZE > 0)
            newCapacity = hugeCapacity(minCapacity);
        // minCapacity is usually close to size, so this is a win:
        elementData = Arrays.copyOf(elementData, newCapacity);
    }
```

`int newCapacity = oldCapacity + (oldCapacity >> 1)`，所以ArrayList每次扩容之后容量都会变为原来的1.5倍左右(**oldCapacity为偶数就是1.5倍，否则是1.5倍左右**)，奇偶不同，比如：10+10/2 = 15，33+33/2 = 49。如果是奇数的话会丢掉小数。

**我们再来通过例子探究一下`grow()` 方法 ：**

- 当add第1个元素时，oldCapacity 为0，经比较后第一个if判断成立，newCapacity = minCapacity(为10)。但是第二个if判断不会成立，即newCapacity 不比 MAX_ARRAY_SIZE大，则不会进入 `hugeCapacity` 方法。数组容量为10，add方法中 return true,size增为1。
- 当add第11个元素进入grow方法时，newCapacity为15，比minCapacity（为11）大，第一个if判断不成立。新容量没有大于数组最大size，不会进入hugeCapacity方法。数组容量扩为15，add方法中return true,size增为11。
- 以此类推······

### 6.hugeCapacity()方法

从上面`grow()`方法源码中能够知道，如果新容量大于最大容量MAX_ARRAY_SIZE，进入(执行)`hugeCapacity()`方法来比较minCapacity和MAX_ARRAY_SIZE，如果minCapacity大于最大容量，则新容量则为`Integer.MAX_VALUE`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 `Integer.MAX_VALUE - 8`。

```java
    private static int hugeCapacity(int minCapacity) {
        if (minCapacity < 0) // overflow
            throw new OutOfMemoryError();
        return (minCapacity > MAX_ARRAY_SIZE) ?
            Integer.MAX_VALUE :
            MAX_ARRAY_SIZE;
    }
```

通过以上6个方法，即可实现ArrayList的完整扩容流程

### 其他方法(ensureCapacity方法)

ArrayList源码中，还有一个ensureCapacity方法，这个方法在ArrayList内部没有被调用过，所以显然是提供给用户调用的，那么这个方法有什么作用呢？

```java
    /**
     * Increases the capacity of this <tt>ArrayList</tt> instance, if
     * necessary, to ensure that it can hold at least the number of elements
     * specified by the minimum capacity argument.
     * 如有必要，增加此ArrayList实例的容量，以确保它至少可以容纳由minimum capacity参数指定的元素数
     * @param   minCapacity   the desired minimum capacity 所需的最小容量
     */
    public void ensureCapacity(int minCapacity) {
        int minExpand = (elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA)
            // any size if not default element table
            ? 0
            // larger than default for default empty table. It's already
            // supposed to be at default size.
            : DEFAULT_CAPACITY;

        if (minCapacity > minExpand) {
            ensureExplicitCapacity(minCapacity);
        }
    }
```

最好在add大量元素之前用`ensureCapacity`方法，以减少增量重新分配的次数

代码示例

```java
public class EnsureCapacityTest {
	public static void main(String[] args) {
		ArrayList<Object> list = new ArrayList<Object>();
		final int N = 10000000;
		long startTime = System.currentTimeMillis();
		for (int i = 0; i < N; i++) {
			list.add(i);
		}
		long endTime = System.currentTimeMillis();
		System.out.println("使用ensureCapacity方法前："+(endTime - startTime));

	}
}
```

运行结果：

```java
使用ensureCapacity方法前：2158
```

使用ensureCapacity后

```java
public class EnsureCapacityTest {
    public static void main(String[] args) {
        ArrayList<Object> list = new ArrayList<Object>();
        final int N = 10000000;
        list = new ArrayList<Object>();
        long startTime1 = System.currentTimeMillis();
        list.ensureCapacity(N);
        for (int i = 0; i < N; i++) {
            list.add(i);
        }
        long endTime1 = System.currentTimeMillis();
        System.out.println("使用ensureCapacity方法后："+(endTime1 - startTime1));
    }
}
```

运行结果：

```java
使用ensureCapacity方法后：1773
```

通过运行结果，我们可以看出向 ArrayList 添加大量元素之前最好先使用`ensureCapacity` 方法，以减少增量重新分配的次数。

**参考资料：**

[1]: https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/collection/ArrayList-Grow.md	"JavaGuide"





