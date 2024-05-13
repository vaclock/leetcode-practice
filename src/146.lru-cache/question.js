/*
* 146.LRU 缓存 
* 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
* 实现 LRUCache 类：
* 	LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
* 	int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
* 	void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
* 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
*  
* 示例：
* 输入
* ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
* [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
* 输出
* [null, null, null, 1, null, -1, null, -1, 3, 4]
* 解释
* LRUCache lRUCache = new LRUCache(2);
* lRUCache.put(1, 1); // 缓存是 {1=1}
* lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
* lRUCache.get(1);    // 返回 1
* lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
* lRUCache.get(2);    // 返回 -1 (未找到)
* lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
* lRUCache.get(1);    // 返回 -1 (未找到)
* lRUCache.get(3);    // 返回 3
* lRUCache.get(4);    // 返回 4
*  
* 提示：
* 	1 <= capacity <= 3000
* 	0 <= key <= 10000
* 	0 <= value <= 105
* 	最多调用 2 * 105 次 get 和 put
* 
*/

function ListNode(value = null, key = null, prev = null, next = null) {
  this.key = key
  this.value = value
  this.prev = prev
  this.next = next
}

// @QUESTION_START
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  /**
   * head <=> node1 <=> node2 <=> node3 <=> node4 <=> tail
   * {
   *  key: node1
   * }
   */
  this.capacity = capacity
  this.head = new ListNode(0)
  this.tail = new ListNode(0)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.cache = new Map()

  this.moveToHead = (key, node) => {
    this.deleteNode(key, node)
    this.addNode(key, node)
  }

  this.deleteNode = (key, node) => {
    // head <=> node1 <=> node <=> node2 <=> tail
    node.prev.next = node.next
    node.next.prev = node.prev
    this.cache.delete(key)
  }

  this.addNode = (key, node) => {
    // head <=> node1 <=> node2 <=> tail
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    node.prev = this.head

    this.cache.set(key, node)
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key)
  if (!node) {
    return -1
  }
  this.moveToHead(key, node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.get(key)) {
    // 存在 更新数据
    node.value = value
    this.moveToHead(key, node)
    return
  }
  if (this.cache.size === this.capacity) {
    this.deleteNode(this.tail.prev.key, this.tail.prev)
  }
  const node = new ListNode(value, key)
  this.addNode(key, node)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  LRUCache,
  {
    data: [undefined],
    structure: ["number","number","number","number"]
  },
  {
    data: [undefined],
    structure: ["number","void"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/lru-cache/');
