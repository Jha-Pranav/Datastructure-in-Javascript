class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val) // instantiating Node class
        if(!this.head){   // In case of first element, head and tail will point to the same.
            this.head = newNode;
            this.tail = this.head; 
        }

        else{    // else Tail.next will be new tail
            this.tail.next = newNode;
            this.tail = newNode

        }
        this.length++;
        return this;
    }
    pop(){  // Remove last element from the linked-list
        if(!this.head) return undefined; // Return undefined in case of empty list

        var current = this.head;
        var newTail = current;

        while(current.next){  // Traverse to the second last node 
            newTail = current
            current = current.next;
        }
        this.tail = newTail;  // Second last node will be the last node
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){   // remove first node from the list
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){ // In case there was only one element in the list
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){ // Add new node at the beginning of the list.
        var newNode = new Node(val);
        if(!this.head) { // In case of empty list head and tail point to the same node
            this.head = newNode;
            this.tail = this.head;
        }
        else{  // Current head will be the next node of new node
        var presentHead = this.head;
        newNode.next = presentHead;
        this.head = newNode;

        }
        this.length++;
        return this;
    }
    get(index){   // Get node from the particular index postion starting with zero.
       if(!this.head)    return null;  //Empty list
       if(index < 0 || index >= this.length) return null; // Index out of range; return null
       var currentValue = this.head; 
       var counter = 0; 
       while(counter < index){  // Itrate till the counter reaches the index postion
           currentValue = currentValue.next;
           counter++;
       }
      
        return currentValue  ;
   }
   set(index,val){  // Assign value of the node at particular postion and return true/false
        var currentNode = this.get(index)
        if(currentNode){ // if not null; node found at that index postion
        currentNode.value = val;
        return true;
        }
       else{
           return false;
       }
   }
   insert(index,val){ // insert item b/w the nodes.
       if(!this.head)    return null; // Empty list
       if(index < 0 || index >= this.length) return null; // Index postion out of range.
       var currentValue = this.head; 
       var counter = 0; 
       
       while(counter < index-1){ //Get second last node from the index postion
           currentValue = currentValue.next;
           counter++;
       }
      var newNode = new Node(val); 
      if(index === 0) { // In case insertion is at beginning of the list,
           newNode.next = this.head;
           this.head = newNode;
           this.length++;
           return this;
       }
       else if(index === this.length-1){  // In case appending at the end of the list
           this.tail.next = newNode;
           this.tail = newNode; 
           this.length++;
           return this;
       }
      newNode.next = currentValue.next; // Node at the index postion will be new next of new node
       currentValue.next = newNode;   // new node will be new next node of second last node
      return this;

  
       }
     remove(index){ // remove node from the particular index postion
       if(!this.head)    return null;  // Empty
       if(index < 0 || index >= this.length) return null; // Out Of Range
       if(index === 0){  // Head
           this.head = this.head.next;
           this.length--;
           return this;
       }

       var currentValue = this.head; 
       var counter = 0; 

       while(counter < index-1){ // Travarse to the second last node from the index postion
           currentValue = currentValue.next;
           counter++;     
       }
       if(index === this.length-1){  //Tail
                this.tail = currentValue;
                this.tail.next = null;
                this.length--;
                return this;
           }
           //Next of second last node will be the next of node at index postion
       currentValue.next = currentValue.next.next; 
       
       this.length--;
       return this;
     }
     reverse(){
         this.tail = this.head;  // tail will be our new head
         var pre = null;
         var current = this.tail;
         while(current){
             var old_next = current.next;
                // pre is our new_next
             current.next = pre;
             pre = current;
             current = old_next;
             
         }


         this.head = pre;
         return this;
     }

}

var linkedlist = new SinglyLinkedList();
linkedlist.push('Hello there!')
linkedlist.push('How are you?')
linkedlist.push('Going well?')
linkedlist.push("Let's learn Linked-list")

