

 class Node{
    constructor(val){
    this.value = val;
    this.next = null;
    this.pre = null;
    }
}

 class doublyLinkedlist{
    constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0; 
    }
   push(val){
       var newNode = new Node(val);
       if(!this.head) {
           this.head = newNode;
           this.tail = this.head;
           this.head.pre = null;

       }
       else{
            this.tail.next = newNode;
            this.tail.next.pre = this.tail;
            this.tail = newNode;
            
       }
       this.length++;
       return this;
   }
   pop(){
       if(this.head) return null;
       this.tail = this.tail.pre;
       this.tail.next = null;
       this.length--;
       return this;
   }
   shift(val){
      var newNode = new Node(val);
      if(this.head){

          this.head.pre = newNode;
          this.head.pre.next = this.head;
          this.head = newNode;
      }
      else{
          this.head = newNode;
          this.tail = this.head;
          this.head.pre = null;
      }
        this.length++;
        return this;
       
   }
   unshift(){
       if(!this.head) return null;

       this.head = this.head.next;
       this.head.pre = null;
       this.length--;
       return this; 
   }
   get(index){
       if(!this.head) return null;
        var len = this.length;
       if(index<0 || index>= len) return null;
       var count = 0;
       var current = this.head;
       while(count !== index){
               current = current.next;
               count++;
               
       }
       return current;
   }
   set(index,val){
       var newNode =  new Node(val);
       var position = this.get(index);
       position.value  = newNode.value;
       return this;

   }
   insert(index,val){
       var newNode =  new Node(val);
       var position = this.get(index);
       position.pre.next = newNode;
       newNode.pre = position.pre;
       position.pre = newNode;
       newNode.next = position;

       this.length++;
       return this;
       
   }
   remove(index){
       var position = this.get(index);
       position.pre.next  = position.next;
       position.next.pre = position.pre;
       this.length--;
       return this;
   }
   reverse(){
//        swap head & tail
        var  temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        var last = null;
        var current = this.head;
        while(current){
            current.next = current.pre;
            current.pre = last;
            last = current;
            current = current.next;
        }
            return this;
   }



       
}

var list = new doublyLinkedlist();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
 