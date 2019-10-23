{
    class Node{
    constructor(val){
        this.value = val;
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
           var newNode = new Node(val)
           if(!this.first){
               this.first = newNode;
               this.last = this.first;
               
           }
           else{
              this.last.next = newNode;
              this.last = newNode
           }
           this.length++ ;
           return this;
       }
     dequeue(){
         if(!this.first) return `Queue is empty`;
         var current = this.first;
         if(this.length === 1){
             this.first = null;
             this.last = null;
         }
         else{
         this.first = this.first.next;
         }
         this.length--;
         return current;
     }
}

var list = new queue();

class TreeNode{
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
        this.count = 0;
    }
}


class TreeTraversal{
    constructor(){
        this.root =null;
    }
    insert(val){
        var newNode = new TreeNode(val)
           if(!this.root) {
               this.root = newNode;
           }
           var current = this.root;
           while(true){
               if(current.value === val){
                   current.count++;
                   return this;
               }
              else if(val > current.value){
                   if(current.right === null){
                       current.right = newNode;
                       return this;
                   }
                   current = current.right;

               }
               else{
                   if(current.left === null){
                       current.left = newNode;
                       return this;
                   }
                   current = current.left;
               }
           }
           
       } 
    breadthFirstSearch(){
       var tempQueue = new queue();
       var result = new queue();
       var current = this.root;
       tempQueue.enqueue(current);
//         while(current){
        
       if(current.left){
           tempQueue.enqueue(current.left);
       }
       if(current.right){
           tempQueue.enqueue(current.right);
       }
       console.log(current);
       console.log(tempQueue)
       result.enqueue(current.first);
       tempQueue.dequeue();
       
       
//        console.log(current);
        

//         }
        return result;
    }

}

var tree = new TreeTraversal();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
}