/* function arraySort(array,n){
    if(n===0 || n===1){
        return true;
    }
    for(let i=1;i<n;i++){
        if(array[i-1]>array[i]){
            return "Unsorted array";
        }
    }
    return  "Sorted array";
}
const array=[];
const n=array.length;
console.log(arraySort(array,n)); */
/* function arraySort(array,n){
    if(n==0 || n==1){
        return "Arraty is Sorted";
    }
    for(let i=1;i<n;i++){
        if(array[i-1]>array[i]){
            return "Array is not Sorted";
        }
    }
    return "Array is SOrted"
}
const array=[3,5,0,6,7]
const n=array.length;
console.log(arraySort(array,n)); */
function arraysort(array,n){
    if(n==0||n==1){
        return "array is Sorted";
    }
    for(let i=1;i<n;i++){
        if(array[i-1]>array[i]){
            return "Array is NOT Sorted";
        }
    }
    return "Array is Sorted";
}
const array=[1,2,3,4,5,6];
const n=array.length;
console.log(arraysort(array,n));