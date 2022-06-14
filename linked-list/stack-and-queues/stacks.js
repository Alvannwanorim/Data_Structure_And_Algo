class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	//This adds to the beginning of the stack instead of the end
	push(val) {
		var newNode = new Node(val);
		if (!this.first || this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}
	//This removes from the beginning of the stack instead of the end
	pop() {
		if (!this.first || this.size === 0) return null;
		var temp = this.first;
		if (this.first === this.last || this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = temp.next;
			temp.next = null;
		}
		this.size--;
		return temp;
	}
}

var stack = new Stack();
