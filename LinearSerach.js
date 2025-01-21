 
 function LinearSerachChanged(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return "The Element is Found At the Index"+i;
        }
    }
    return "The Element is Not Found";
 }
 const array=[4,7,2,8,3,5];
 const target=5
 console.log(LinearSerachChanged(array,target));