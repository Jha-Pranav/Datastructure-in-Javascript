{// Priority Queue using sorting method

class Node{
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor(){
        this.arry = [];
    }
    sort(){
        this.arry.sort((a,b) => a.priority - b.priority);
    }

    enqueue(val,priority){
        var newNode = new Node(val,priority);
        this.arry.push(newNode);
        this.sort()
        return this.arry;
    }
    dequeue(){
        this.arry.sort().shift();
        return this.arry;
    }
}
var queue = new priorityQueue();
}