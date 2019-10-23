function Search(arr,value){
    for (var i=0; i< arr.length; i++){
        if(arr[i] === value){
            return i;
        }
        
    }
    return -1;
}
Search([1,2,3,4,5,7,9],2);