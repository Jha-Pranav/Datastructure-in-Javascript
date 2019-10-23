function insertionSort(arr){
        for(var i=1; i<arr.length; i++){
                var currentVal = arr[i];
                for(var j=i-1; j>-1 && currentVal<arr[j]; j--){
                       arr[j+1] = arr[j]; 
                       console.log(arr,i,j)
                }
                arr[j+1] = currentVal;
        }
        return arr;
}

insertionSort([2,1,9,76,4])