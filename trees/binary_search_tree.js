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
	bfs() {
		var node = this.root,
			queue = [],
			data = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	dfsPreOrder() {
		var data = [];
		function traverse(node) {
			data.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	dfsPostOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.val);
		}
		traverse(this.root);
		return data;
	}
	dfsInOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(12);
tree.insert(25);
tree.insert(8);
tree.insert(14);
