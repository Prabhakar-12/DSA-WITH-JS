// function InsertValue(array,n,key,capacity){
//     if(n>=capacity)
//         return n;
//     array[n]=key;
//     return (n+1);
// }
// let array=new Array(20);
// array[0]=1;
// array[1]=2;
// array[2]=3;
// array[3]=4;
// array[4]=5;
// array[5]=6;
// let capacity=20;
// let n=6;
// let i,key=7;
// console.log("Before insertion");
// for(i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// //<br>//
// letn=InsertValue(array,n,key,capacity);
// console.log("After insertion");
// for(i=0;i<n;i++){
//     console.log( array[i]);
// }
// Javascript program to implement insert
// operation in an unsorted array.

// Function to insert a given
// key in the array. This
// function  returns n + 1
// if insertion is successful,
// else n.
function insertEnd(arr, n, key, capacity)
{

    // Cannot insert more elements
    // if n is already more than
    // or equal to capacity
    if (n >= capacity)
        return n;

    arr[n] = key;
    return (n + 1);
}

let arr = new Array(20);
arr[0] = 12;
arr[1] = 16;
arr[2] = 20;
arr[3] = 40;
arr[4] = 50;
arr[5] = 70;
let capacity = 20;
let n = 6;
let i, key = 26;

console.log("Before Insertion: ");
for (i = 0; i < n; i++)
    console.log(arr[i] + " ");
console.log("</br>");

// Inserting key
n = insertEnd(arr, n, key, capacity);

console.log("After Insertion: ");
for (i = 0; i < n; i++)
    console.log(arr[i] + " ");