class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length += 1
        return this
    }
}

const list = new singlyLinkedList()
list.push("hello")
