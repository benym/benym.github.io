---
title: LeetCode-890-查找和替换模式
date: 2020/7/26 17:00:32
description: 查找和替换模式
categories: LeetCode
tags: 
- 数组
- Java
- Medium
keywords: 数组,Java,Medium,LeetCode
---

## LeetCode-890-查找和替换模式

你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。

如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。

（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）

返回 words 中与给定模式匹配的单词列表。

你可以按任何顺序返回答案。

<!--more-->

**示例1：**

```
输入：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
输出：["mee","aqq"]
解释：
"mee" 与模式匹配，因为存在排列 {a -> m, b -> e, ...}。
"ccc" 与模式不匹配，因为 {a -> c, b -> c, ...} 不是排列。
因为 a 和 b 映射到同一个字母。
```

**提示：**

- `1 <= words.length <= 50`
- `1 <= pattern.length = words[i].length <= 20`

### 解题思路

我们可以用两个映射表（map）存储字母到字母的映射关系，第一个映射表保证一个字母不会映射到两个字母，第二个映射表保证不会有两个字母映射到同一个字母。例如 word 为 a，pattern 为 x，那么第一个映射表存储 a -> x，第二个映射表存储 x -> a。

### Java代码

```java
class Solution {
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        List<String> ans = new ArrayList();
        for (String word : words)
            if (match(word, pattern))
                ans.add(word);
        return ans;
    }

    public boolean match(String word, String pattern) {
        Map<Character, Character> m1 = new HashMap();
        Map<Character, Character> m2 = new HashMap();

        for (int i = 0; i < word.length(); ++i) {
            char w = word.charAt(i);
            char p = pattern.charAt(i);
            if (!m1.containsKey(w)) m1.put(w, p);
            if (!m2.containsKey(p)) m2.put(p, w);
            if (m1.get(w) != p || m2.get(p) != w)
                return false;
        }
        return true;
    }
}
```

