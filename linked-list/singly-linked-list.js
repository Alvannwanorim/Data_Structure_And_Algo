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
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }
    pop() {
        if (!this.head) return undefined
        var current = this.head
        var newTail = this.head
        while (current.head) {
            current = current.next
            newTail = current
        }
        this.tail = newTail
        this.tail.next = null

        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return newTail
    }
    shift() {
        if (!this.head) return undefined
        var currentHead = this.head
        var nextHead = currentHead.next
        this.head = nextHead
        this.length--
        if (this.length === 0) {
            this.tail = null
        }


        return currentHead

    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            this.length++
            return this
        }
        var expiredHead = this.head
        this.head = newNode
        this.head.next = expiredHead
        this.length++
        return this


    }
}

const list = new singlyLinkedList()
list.push("hello")
