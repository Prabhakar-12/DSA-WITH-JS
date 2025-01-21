/*  
function BinarySerach(array,target){
    let left=0;
    let right=array.lrngth-1;
    while(left<=right){
        let Middle=Math.floor((left+right /2)); 
        if(array[Middle]===target){
            return "Thr Target Element is Found"+Middle;
        }else if(array[Middle]<target){
            left=Middle+1;
        }else{
            right=Middle-1;
        }
        }
        
}
        // Test the function with given array and target element.
    // BinarySerach(array, target) will return the index of the target element if found, or -1 if not found.
    // In this case, the target element is 5 and it is found at index 4 in the given array.
    // console.log(BinarySerach([1,2,3,4,5,6,7,8], 5)); // Output: Thr Target Element is Found 4
        
const array=[1,2,3,4,5,6,7,8];
const target=5;

console.log(BinarySerach(array,target)); */