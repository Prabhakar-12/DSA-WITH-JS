/* function average(array,n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+array[i];
    }
    return "The Average of the array number is"+ parseFloat(sum/n);
}
const array=[2,4,6,8,1,7,20];
const n=array.length;
console.log(average(array,n)); */
function average(array,n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=array[i];
    }
    return "The Average of array is"+parseFloat(sum/n);
}
const array=[2,4,5,2];
const n=array.length;
console.log(average(array,n));