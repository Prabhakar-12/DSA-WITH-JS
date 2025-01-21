function SecondLargestElement(array){
    const n=array.length;
    array.sort((a,b)=>(a-b))
    for(let i=n-2;i>=0;i--){
        if(array[i]!==array[i-1]){
            return array[i];
        }
    } 
}
const array=[2,7,4,8,8,1,10,9];
console.log(SecondLargestElement(array));

//Both having same Time complexuty 0.283seconds
 //Second Code to find out the second largest value in the array
function secondLargestValue(array1){
    let largest=-Infinity
    let SecondLargest=-Infinity;
    for(let num of array1){
        if(num>largest){
            SecondLargest=largest;
            largest=num;
        }else if(num>SecondLargest && num<largest){
            SecondLargest=num;

        }
    }
    return SecondLargest
}
const array1=[2,5,4,3,8,10,9];
console.log(secondLargestValue(array1));