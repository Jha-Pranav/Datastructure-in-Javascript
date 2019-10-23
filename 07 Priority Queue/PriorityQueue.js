{
class Node{
    constructor(title,priority){
        this.title = title;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor(){
        this.arry = [];
    }
    positioning(){
        var index = this.arry.length -1;
        var parent = 0;
        (index > 0)? parent = Math.floor((index-1)/2)  : parent;
        
        while(this.arry[index].priority < this.arry[parent].priority){
//             swap
               
               var temp = this.arry[index];
               this.arry[index] = this.arry[parent];
               this.arry[parent] = temp;
                index = parent;
               (index > 0)? parent = Math.floor((index-1)/2)  : parent;
              
        }
       
    }
    enqueue(title,priority){
        var newNode  = new Node(title,priority);
        console.log(this.arry)
        this.arry.push(newNode);
             this.positioning();
        return this;
    }
    bubleDown(){
        var element = this.arry;
        
        for(var n=0; n<(Math.floor(((element.length)-1)/2)); n++){
         var   parent = element[n];
         var   leftchild = element[2*n+1];
         var   rightChild = element[2*n+2];
            if(leftchild.priority < parent.priority){
                var temp = element[n];
                element[n]  = element[2*n+1];
                element[2*n+1] = temp;
            }
            var   parent = element[n];
            if(rightChild.priority < parent.priority){
                var temp = element[n];
                element[n]  = element[2*n+2];
                element[2*n+2] = temp;
            }
        }
        return this;

    }
    dequeue(){
        this.arry.shift();
        var lastElement = this.arry.pop();
        if(lastElement) this.arry.unshift(lastElement);
        this.bubleDown();
        return this.arry;
    }
}

var queue = new priorityQueue();
queue.enqueue('element of 10th priority',10);
queue.enqueue('element of 20th priority',20);
queue.enqueue('element of 8th priority',8);
queue.enqueue('element of 9th priority',9);
queue.enqueue('element of 6th priority',6);
queue.enqueue('element of 12th priority',12);
queue.enqueue('element of 5th priority',5);
queue.enqueue('element of 4th priority',4);
queue.enqueue('element of 1th priority',1);
queue.enqueue('element of 0th priority',0);
queue.enqueue('element of 3th priority',3);
queue.enqueue('element of 2th priority',2);
queue.enqueue('element of 2th priority',2);
}