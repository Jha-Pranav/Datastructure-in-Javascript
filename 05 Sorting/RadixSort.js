// Helper function 1:

function getDigit(num,i){
    result = Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
    return result;
}

// getDigit(-453672,4);


// Helper Function 2:
 function countDigit(num){
//      return num.toString().length
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) +1
 }

function mostDigit(arr){
   let maxDigit = 0;
    for(var i=0; i<arr.length; i++){
        maxDigit = Math.max(maxDigit,countDigit(arr[i])) 
    }
    
return maxDigit
}

function radixSort(arr){
   var maxDigitCount = mostDigit(arr);
   for(var k=0; k<maxDigitCount; k++){
       let digitBuckets = Array.from({length :10}, () => [])
       for(var g=0; g<arr.length; g++){
       let digit = getDigit(arr[g],k)
        
        digitBuckets[digit].push(arr[g])
        
       }
       arr = [].concat(...digitBuckets);

 
   } return arr;

}
radixSort([23,567,890,-2,-6,-98,234,5678,20]);