function pivot(arr, start=0, end=arr.length-1){
    var pivot = arr[start];
    var swapIndex = start;
    for(var i=start+1; i<arr.length; i++){
        
        if(pivot > arr[i]){
            swapIndex++;
//            arr[i] <==> arr[swapIndex]
                let temp = arr[i]
                arr[i] = arr[swapIndex]
                arr[swapIndex] = temp
        } 
    }

//     arr[start] <==> arr[swapIndex]
       let temp1 = arr[start];
       arr[start] = arr[swapIndex]
       arr[swapIndex] = temp1

    
    return swapIndex;
}

// pivot([4,6,9,1,2,5,3])

function quickSort(arr,left = 0, right= arr.length -1){
    if(left< right){
    let pivotIndex = pivot(arr, left,right);

//    left
      quickSort(arr,left,pivotIndex);
//        right
      quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

quickSort([100,-3,4,-1,0,4]);