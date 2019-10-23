
function mergingArrays(arr1,arr2){
    var result = [];
    var i = 0;
    var j = 0;
   while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++
    }
    else {
         result.push(arr2[j])
        j++
        }
       
}
   while(i<arr1.length){
       result.push(arr1[i])
        i++
   }
   while(j<arr2.length){
       result.push(arr2[j])
        j++
   }

  return result;
}

function mergSort(arr) {

 if(arr.length <= 1) return arr;
 let midPoint = Math.floor(arr.length/2);
 let left = mergSort(arr.slice(0,midPoint));
 let right = mergSort(arr.slice(midPoint));
   return  mergingArrays(left, right);

}

mergSort([21,19,4,6])