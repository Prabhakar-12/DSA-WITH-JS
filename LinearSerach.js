// function findElment(array,target){
//     for(let i =0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }    
//     }
//     return -1;
// }
// const array=[4,7,2,8,3,5];
// const target=5;
//  const output=findElment(array,target);
//  if(output!=-1){
//     console.log("The Element found at index"+output);
//  }else{
//     console.log("The Element not Found");
//  }
 function LinearSerach(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return "The Element is Found At the Index"+i;
        }
    }
    return "The Element is Not Found";
 }
 const array=[4,7,2,8,3,5];
 const target=5
 console.log(LinearSerach(array,target));