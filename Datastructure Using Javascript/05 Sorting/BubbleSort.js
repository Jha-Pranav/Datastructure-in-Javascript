function bubbleSort(arr){
    for(var j=arr.length; j>0; j--){
    for (var i=0; i<j-1; i++){
        console.log(arr,arr[i],arr[i+1],j)
        if(arr[i] > arr[i+1]){
//             swapping of two number
                let temp = arr[i];
                arr[i]  = arr[i+1];
                arr[i+1] = temp;
        }
    }
    }
}
bubbleSort([97,22,47,2,9,6,4]);