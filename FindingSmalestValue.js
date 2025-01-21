function SmallestValue(array,n){
    let smallValue=array[0];
    for(let i=1;i<n;i++){
        if(array[i]<smallValue){
            smallValue=array[i];
        }
    }
    return "The smaller Value is "+smallValue;
}
const array=[6,8,4,3,9];
const n=array.length;
console.log(SmallestValue(array,n));
 