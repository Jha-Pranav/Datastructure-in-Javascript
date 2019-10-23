// // Naive Approach

// function selectionSort(arr){
   
//     for(var i=0; i<arr.length; i++){
//         for(var j=i+1; j<arr.length; j++){
// //             console.log(i,j)
//             if(arr[i] > arr[j]){
// //             swap
//                var temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp; 
//             } 
// console.log(arr)
//         }
       
//     }
//     return arr;
// }
// selectionSort([0,2,41,62,12,7,9]);


// // Method # 2 :

// function selectionSort(arr){
   
//     for(var i=0; i<arr.length; i++){
//         let minValue = i;
//         for(var j=i+1; j<arr.length; j++){
//             if(arr[minValue] > arr[j]){
//                 minValue = j;

//             } 

//         } 
             
//             if(minValue !== i){    
//             console.log(arr,i,minValue) 
//                var temp = arr[i];
//                arr[i] = arr[minValue];
//                arr[minValue] = temp; 

//             }
//     }
//     return arr;
// }
// selectionSort([1,2,3,4,5,6,7,8,9]);
var counter=0;
for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
        counter += 1;
        console.log(i,j)
    }

}
console.log(counter);