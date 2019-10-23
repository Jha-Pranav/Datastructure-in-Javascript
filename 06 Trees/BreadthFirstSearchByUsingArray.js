{
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
           var queue = [];
           var result = [];
           var current = this.root;
            queue.push(current);
            while(queue.length > 0){

            if(current.left){
                 queue.push(current.left);
            }
            if(current.right){
                 queue.push(current.right);
            }
           
             result.push(current.value);
             queue.shift();
             
             current = queue[0];
            
            }

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

