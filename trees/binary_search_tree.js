class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		var newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		var current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				//left side logic
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (val > current.val) {
				// right right logic
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
		return this;
	}
	find(val) {
		if (this.root === null) return undefined;
		var current = this.root;
		var found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
}

var tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(12);
tree.insert(25);
tree.insert(8);
tree.insert(14);
