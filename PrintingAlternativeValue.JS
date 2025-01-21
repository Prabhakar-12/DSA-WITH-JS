function AlternativeValue(array){
    let NewArray=[];
    for(let i=0;i<array.length;i++){
         if(array[i]%2===0){
            NewArray.push(array[i]);
         }
    }
    return NewArray;
}

const array=[1,2,3,4,5,6,7,8,9,10];
console.log(AlternativeValue(array));