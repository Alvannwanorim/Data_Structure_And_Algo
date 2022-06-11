class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}
		var prevTail = this.tail;
		this.tail = newNode;
		this.tail.prev = prevTail;
		prevTail.next = this.tail;
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		var oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}
		var prevHead = this.head;
		this.head = newNode;
		this.head.prev = prevHead;
		this.head.next = null;
		prevHead.next = this.head;
		this.length++;
		return this;
	}
	shift() {
		if (!this.head) return undefined;
		var prevHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = prevHead.next;
			this.head.prev = null;
			prevHead.next = null;
		}
		this.length--;
		return prevHead;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		var count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (index !== count) {
				current = current.next;
				count++;
			}
		} else if (index >= this.length / 2) {
			count = this.length;
			current = this.tail;
			while (index !== count) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		var newNode = new Node(val);
		var beforeNode = this.get(index - 1);
		var afterNode = beforeNode.next;
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		afterNode.prev = newNode;
		newNode.next = afterNode;
		this.length++;
		return true;
	}
	set(index, val) {
		if (index < 0 || index >= this.length) return undefined;
		var node = this.get(index);
		node.val = val;
		return node;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var expiredNode = this.get(index);
		var beforeNode = expiredNode.prev;
		var afterNode = expiredNode.next;
		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		expiredNode.next = null;
		expiredNode.prev = null;
		this.length--;
		return expiredNode;
	}
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
