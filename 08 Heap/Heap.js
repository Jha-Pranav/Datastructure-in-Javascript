{
class BinaryMaxHeaps {
    constructor(){
        this.value = [];
    }
    bubleUp(){
      var n = this.value.length - 1;
      var ParentIndex = Math.floor((n-1)/2);
        while(this.value[n] > this.value[ParentIndex]){
             
             var temp  = this.value[n];
             this.value[n] = this.value[ParentIndex];
            this.value[ParentIndex] = temp;
             n = ParentIndex;
             ParentIndex = Math.floor((n-1)/2);

        }
            return this;

    }
    bubleDown(){
        var element = this.value;
        
        for(var n=0; n<element.length; n++){
         var   parent = element[n];
         var   leftchild = element[2*n+1];
         var   rightChild = element[2*n+2];
            if(leftchild > parent){
                var temp = element[n];
                element[n]  = element[2*n+1];
                element[2*n+1] = temp;
            }
            var   parent = element[n];
            if(rightChild > parent){
                var temp = element[n];
                element[n]  = element[2*n+2];
                element[2*n+2] = temp;
            }
        }
        return this;

    }
    insert(val){
        this.value.push(val);
        this.bubleUp();
        return this.value;

    }
    remove(){
 
        this.value.shift();
        var UnshifValue = this.value.pop(); 
        if(UnshifValue) this.value.unshift(UnshifValue);
        this.bubleDown();
        
        return this.value;
    }
}

var heap = new BinaryMaxHeaps;
heap.insert(20);
heap.insert(100);
heap.insert(40);
heap.insert(50);
heap.insert(90);
heap.insert(78);
heap.insert(93);
heap.insert(67);
heap.insert(110);
}