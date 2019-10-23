// Method 1:

function sorting(arr){
    var noSwap;
    for(var j=arr.length; j>0; j--){
        noSwap = true;
    for (var i=0; i<j-1; i++){
//         console.log(arr,arr[i],arr[i+1],j)
        if(arr[i] > arr[i+1]){
//             swapping
            let temp= arr[i];
            arr[i] = arr[i+1];
            arr[i+1] =temp;
            noSwap = false;
        }
    } console.log(arr,j)
    } return arr;
    }

sorting([1,2,3,4,6,5,7,8,0,9]);
