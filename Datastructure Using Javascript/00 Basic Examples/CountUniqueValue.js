// Input [] output : 0
// Input [1,2,3,3,3,3,4,5,5,8,8,9] output : 7
// These methods will work only on sorted array.

// Method 1:
// Naive approach
let counter = 1;
function CountUniqueValue1(arr){
    if(arr.length === 0){
        return 0;
    }
     for (let i=0; i<arr.length-1; i++){
         if(arr[i] !== arr[i+1]){
             counter++
         }
     }
    console.log(counter);
}

arr1 = [1,2,3,3,3,3,4,5,5,8,8,9];
CountUniqueValue1(arr1);

//Method 2:
let newArray = [];
function CountUniqueValue2(arr){
    
    if(arr.length === 0){
        return 0;
    }
    let newArray = [arr[0]];
     for (let i=0; i<arr.length-1; i++){
         if(arr[i] !== arr[i+1]){
            newArray.push(arr[i+1])
         }
     }
    console.log(newArray.length);
}

arr2 = [1,2,3,3,3,3,4,5,5,8,8,9];
CountUniqueValue2(arr2);

// Method 3 : 
function CountUniqueValue3(arr){
    let frequencyCounter = {};
    for (var i=0; i< arr.length; i++){
        frequencyCounter[arr[i]] =(frequencyCounter[i] || 0) + 1;
    }
    console.log(Object.keys(frequencyCounter).length)
}

arr3 = [];
CountUniqueValue3(arr3);

// Method 4:
// By Using while loop
function CountUniqueValue4(arr){
	let i = 0;
    let  j = 1;
	while(j<arr.length){
	if(arr[i] !== arr[j]){
		i++
		arr[i] = arr[j]
	}
	else{
		j++
    }
    
	}
	console.log(i+1);
	
}
let arr4 = [1,2,3,3,3,3,4,5,5,8,8,9];
CountUniqueValue4(arr4);

// Method 5 :
// By using For loop
function CountUniqueValue5(arr){
    if (arr.length == 0) {return 0;};
	let i = 0;
	for(let j=1; j<arr.length; j++){
	if(arr[i] !== arr[j]){
		i++;
		arr[i] = arr[j];
	 }
	}
	console.log(i+1);
}
let arr5 = [1,2,3,3,3,3,4,5,5,8,8,9];
CountUniqueValue5(arr5);