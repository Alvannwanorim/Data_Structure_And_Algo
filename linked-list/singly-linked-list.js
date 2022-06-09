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
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }
    pop(){
        if(!this.head) return undefined 
        var current = this.head
        var newTail = this.head
        while(current.head){
            current = current.next
            newTail = current
        }
        this.tail = newTail
        this.tail.next = null
        
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return newTail
    }
    shift(){
        if(!this.head) return undefined
        var currentHead = this.head 
        var nextHead = currentHead.next
        this.head = nextHead
        this.length --
        if(this.length===0){
            this.tail = null
        }
        

        return currentHead
        
    }
    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            this.length ++
            return this
        }
        var expiredHead = this.head
        this.head = newNode
        this.head.next= expiredHead
        this.length ++
        return this 
        
        
    }
    get(index){
        if (index <0 || index > this.length)return undefined
        var count = 0
        var current = this.head
        while(count !==index){
            current = current.next
            count++
        }
        return current
    }
    set(index,val){
        if(index<0 || index> this.length) return false 
        const node = this.get(index,val)
        if(node){
            node.val = val
            return true 
        }
        return false
    }
    print(){
        let arr = []
        var curent = this.head
        while(curent){
            arr.push(curent.val)
            curent = curent.next
        }
        return arr
    }
    reverse(){
        var node = this.head
        this.head = this.tail
        this.tail= node
        var next
        var prev = null
        for (var i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
        
    }
    insert(index,val){
        if(index<0 || index> this.length) return false 
        if(index===0) return !! this.unshift(val)
        if(index ===this.length) return !! this.push(val)
        var prevNode = this.get(index-1)
        var newNode = new Node(val)
        var nextNode = prevNode.next
        prevNode.next=newNode
        newNode.next= nextNode
        this.length++
        return true
        
    }
    remove(index){
        if(index<0 || index> this.length) return false 
        if(index===0) return this.shift()
        if(index ===this.length) return  this.pop()
        var prevNode = this.get(index-1)
        var node  = prevNode.next
        var nextNode = node.next
        prevNode.next = nextNode
        this.length--
        return node
    }
    
}

const list = new singlyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")