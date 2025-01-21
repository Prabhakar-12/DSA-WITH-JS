function LargestValue(array){
    let GreatestValue=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>GreatestValue){
            GreatestValue=array[i];
        }
     }
     return "The greatest Value is "+GreatestValue;

}
const array=[5,8,6,2,99,1];
console.log(LargestValue(array));
 