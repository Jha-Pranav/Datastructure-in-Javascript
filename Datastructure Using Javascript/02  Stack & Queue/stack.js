// Stacks by using singlyLinkedlist
{
class Node{
    constructor(val){
        this.value =val;
        this.next = null;
    }
}
class stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        var newNOde = new Node(val);
        if(this.first === null) {
            this.first = newNOde;
            this.last = this.first;
           
        }
        else{
            var temp = this.first;
            this.first = newNOde;
            this.first.next = temp;
        }
        this.length++;
        return this.length;
    }
    pop(){
        if(this.first === null) return null;
        var current = this.first
        if(this.length === 1){
           
            this.first = null;
            this.last = null;
            
        }
        else{
            this.first = current.next;
        }
        this.length--;
        return current.value;
    }
}
var list = new stack();

}