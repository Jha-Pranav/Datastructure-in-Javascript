// Method 1 : Itrative solution.

function CountOddValues(arr){
    var newArray = [];
   for (let i=0; i<arr.length; i++){
            if(arr[i] % 2 !== 0){
                newArray.push(arr[i])
            }
   }
   return newArray

}

CountOddValues([1,2,3,4,5,6,7,8,9]);

// Method 2: Recursion method.
var newArray = [];
function CountOddValues(arr){
    if (arr.length === 0){
        return newArray
    }
   if(arr[0] % 2 !== 0){
        newArray.push(arr[0])
   } 
   CountOddValues(arr.slice(1))
}
