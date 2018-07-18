/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null
  this.length = 0
};


/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * （获取指定索引位置的节点）
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length) return -1
  let curNode = this.head,
    curIndex = 0
  while (curIndex !== index) {
    curNode = curNode.next
    curIndex++
  }
  return curNode.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * （在链表首端添加一个节点，该节点next属性指向原本的head节点）
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = {
    val: val,
    next: this.head
  }
  this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * （在链表末端添加一个节点，该节点的next指向为null）
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.length === 0) return this.addAtHead(val)
  let curNode = this.head
  while (curNode.next !== null) {
    curNode = curNode.next
  }
  curNode.next = {
    val: val,
    next: null
  }
  this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * （在指定位置添加一个新节点，从该索引位置起后面所有的节点往后移一位，新节点的next属性指向该位置原本的节点）
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return

  if (this.length === 0) return this.addAtHead()

  if (index === this.length) return this.addAtTail(val)

  let curIndex = 0,
    curNode = this.head,
    prevNode

  while (curIndex < index) {
    prevNode = curNode
    curNode = curNode.next
    curIndex++
  }
  let newNode = {
    val: val
  }
  newNode.next = curNode
  // curNode is in front of target
  prevNode.next = newNode
  this.length += 1
  return
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * （删除指定索引位置的节点，该节点前一节点的next属性直接指向指定位置的后一个节点）
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0) return
  let curIndex = 0,
    curNode = this.head,
    prevNode
  while (curIndex < index) {
    prevNode = curNode
    curNode = curNode.next
    curIndex++
  }
  prevNode.next = curNode.next
  this.length--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
console.log((JSON.stringify(linkedList)))
linkedList.addAtTail(3);
console.log((JSON.stringify(linkedList)))
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
console.log((JSON.stringify(linkedList)))
console.log(linkedList.get(1));            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
console.log(linkedList.get(1));            // returns 3
console.log((JSON.stringify(linkedList)))
