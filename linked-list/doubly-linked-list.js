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
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
