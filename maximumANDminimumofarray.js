function minimuNumber(array){
    if(array.length!=0){
        let minimum=array[0];
        for(let i=1;i<array.length;i++){
            if(array[i]<minimum){
                 minimum=array[i];
            }
        }
        console.log("The Minimum value is "+minimum);
    
          let maximum=array[0];
          for(let i=1;i<array.length;i++){
            if(array[i]>maximum){
                maximum=array[i];
            }
             
          }
          console.log("The maximum value is "+maximum);
          return "Succefully Recognized the minimum and maximum values";
    }
    else{
        console.log("array is empty");
    }
    return "values are not present in the array";
      
}
function main(){
    const array=[ 5,3,8,1,0,2];
    console.log(minimuNumber(array));
}
main();
 console.log("Hi prabhakar");
 