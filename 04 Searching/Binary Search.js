function binarySearch(arr, element){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2);
    while(arr[middle] !== element && start<=end){
    if(element>arr[middle]) start = middle+1;
    else end = middle-1;
    middle = Math.floor((start+end)/2);
}
 return arr[middle] === element? middle : -1;
}
binarySearch([0,1,2,3,4,5,6,7,8,9]);