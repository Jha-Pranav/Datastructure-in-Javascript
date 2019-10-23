{class Node{
    constructor(val){
        this.value =val;
        this.next = null;
    }
}
class queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
             this.first = newNode;
             this.last = this.first;

        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length
    }
    dequeue(){
        if(!this.first) return null;
        var current = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;

        }
        else{
            this.first = current.next;
        }
        return current.value;
    }
}
var list = new queue();
}
