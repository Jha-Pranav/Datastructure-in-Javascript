// This hash function will work only with the "string"
{
    class HashTable{
    constructor(size = 7){
        this.keyMap = new Array(size);

    }

    _hash(key){
    var total  = 0;

    var weird_prime = 31;
//     It's should be prime. But don't know why 31. May be they had done researches on all the prime number.
    for(var i= 0; i < Math.min(key.length,100); i++)
    {
//         Map a  to 1; b to 2; c to 3 etc.
       var val = key[i].charCodeAt(0) - 96;
       var total =(total * weird_prime + val) % this.keyMap.length;
       
        }
       
        return total;

    }
    set(key,value){
      var  index = this._hash(key);
       if(!this.keyMap[index]){
           this.keyMap[index] = [];
       }
        this.keyMap[index].push([key,value]);
         return this.keyMap;
    }
    get(searchString){
        var index = this._hash(searchString);
        
        if(!this.keyMap[index]) return `${searchString} doesn't exist.`
    for(var arry of this.keyMap[index]){
       if(arry[0] === searchString) return arry[1];
      
    }
   return `${searchString} doesn't exist.`
    }
    keys(){
        var keys = [];
       for(var entries of this.keyMap){
           if(entries) 
          {
              if(entries.length > 1){ 
             for(var subEntries of entries){
               keys.push(subEntries[0])
           }}
           else{
               keys.push(entries[0][0])
           }
       }
       }
       return keys;
    }
    values(){
         var values = [];
       for(var entries of this.keyMap){
           if(entries) 
          {
              if(entries.length > 1){ 
             for(var subEntries of entries){
               values.push(subEntries[1])
           }}
           else{
               values.push(entries[0][1])
           }
       }
       }
       return values;

    }
}
 
var hash = new HashTable();
hash.set('ting', 'hi');
hash.set('tong', 'Hello');
hash.set('ding', 'why');
hash.set('dong', 'what');
hash.set('tik', 'Yes');
hash.set('tok', 'No');
hash.set('hmmmm', 'Jai Ho!');


}