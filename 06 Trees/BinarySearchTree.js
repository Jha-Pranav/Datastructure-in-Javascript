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
   
//     insert(val){
//        this.count =1;
       
//         var newNode = new Node(val);
//         if(!this.root) {
//             this.root = newNode;
//            return this;
//         }
//         else{
//             var current  = this.root;
//             while(true){

//                 while(current.value <= val){
                   
//                     if(current.right === null){
//                         current.right = newNode;
//                         return this;
//                     } 
//                     current = current.right;
//                 }

//                  while(current.value >= val){
                  

//                       if(current.left === null){
//                         current.left = newNode;
//                          return this;
//                     }

//                     current = current.left;
                     
//                 }

//             }
//         }
       

//     }

   insert(val){
       var newNode = new Node(val);
//        this.count = 1;
       if(!this.root) {
           this.root = newNode;
           return this;
       }
       var current = this.root;
       while(true){
//        if(current.value === val) return  `Entry alredy exists`
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
   find(val){
        if(!this.root) return `Tree is empty`
        var current = this.root;

        while(current != null){
            console.log(current);
            if(current.value === val) return true
            else if(current.value < val){
                current = current.right;
               
            }
            else{
                current = current.left;
              
            }
        }
          return `Search not found.`

       }

}

var tree = new BinarySearchTree();
tree.insert(69);
tree.insert(35);
tree.insert(80);
tree.insert(27);
tree.insert(45);
tree.insert(78);
tree.insert(84);
tree.insert(93);
tree.insert(32);
tree.insert(33);
}