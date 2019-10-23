function SumZero(arr){
	let left= 0 ;
	let right = (arr.length)-1;
	let sum = arr[left] + arr[right];
	while(sum !== 0){
	if(sum > 0){
		right--
	}
	if(sum<0){
		left++
	}
	else{
		return [arr[left], arr[right]]
	}
	}
}
SumZero([-3,-2,-1,0,1,2])