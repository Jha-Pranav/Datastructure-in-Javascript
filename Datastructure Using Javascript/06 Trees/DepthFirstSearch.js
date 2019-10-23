{
class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
         this.count = 1;
        
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
       
    }

       insert(val){
       var newNode = new Node(val);
       if(!this.root) {
           this.root = newNode;
           return this;
       }
       var current = this.root;
       while(true){
        if(current.value === val){
           
                current.count++;     
                return this;   
            }
       if(val > current.value){
           if(current.right === null){
           current.right = newNode;
           return this;
           }
           current = current.right;
       }
       else if(val < current.value){
            if(current.left === null){
           current.left = newNode;
           return this;
           }
           current = current.left;
       }
       }
   }
    DFSPreOrder(){
        var result = [];
        var current = this.root;
      
        function traverse(node){
            result.push(node.value);
            if(node.left) traverse(node.left);
            
            if(node.right) traverse(node.right);

        }
        traverse(current);

        return result;
    }
    DFSPostOrder(){
        var result = [];
        var current = this.root;
      
        function traverse(node){
            
            if(node.left) traverse(node.left);
           
            if(node.right) traverse(node.right);
             result.push(node.value);

        }
        traverse(current);

        return result;
    }
    DFSInOrder(){
        var result = [];
        var current = this.root;
      
        function traverse(node){
            
            if(node.left) traverse(node.left);
            result.push(node.value);
            if(node.right) traverse(node.right);

        }
        traverse(current);

        return result;
    }


   }

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

// tree.DFSPreOrder();
// tree.DFSPostOrder();
// tree.DFSInOrder();
}