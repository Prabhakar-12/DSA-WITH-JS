// function print3largest(arr, arr_size) { 
//     let first, second, third; 

//     // There should be at least three elements 
//     if (arr_size < 3) { 
//         console.log("Invalid Input"); 
//         return; 
//     } 

//     third = first = second = Number.MIN_VALUE; 
//     for (let i = 0; i < arr_size; i++) { 
    
//         // If current element is greater than first
//         if (arr[i] > first) { 
//             third = second; 
//             second = first; 
//             first = arr[i]; 
//         } 
        
//         // If arr[i] is in between first and second then update second 
//         else if (arr[i] > second) { 
//             third = second; 
//             second = arr[i]; 
//         } 
//         else if (arr[i] > third) 
//             third = arr[i]; 
//     } 

//     console.log("Three largest elements are " + first + " " + second + " " + third); 
// } 

// let arr = [12, 13, 1, 10, 34, 1]; 
// let n = arr.length; 

// print3largest(arr, n);
/* function print3largest(array,array_size){
    let first,second,third;
    if(array_size){
        return "array size should be 3 ";                                       
    }
    third=second=first= Number.MIN_VALUE;
    for(let i=0;i<array.length;i++){
        if(array[i]>first){
            third=second;
            second=first;
        }
    }
} */
function find3Largest(array) {
    if (array.length < 3) {
      return "Array size should be at least 3"; 
    }
  
    let first = Number.MIN_VALUE;
    let second = Number.MIN_VALUE;
    let third = Number.MIN_VALUE;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > first) {
        third = second;
        second = first;
        first = array[i]; 
      } else if (array[i] > second && array[i] !== first) { 
        third = second;
        second = array[i];
      } else if (array[i] > third && array[i] !== first && array[i] !== second) {
        third = array[i];
      }
    }
  
    return [first, second, third];
  }
  
  // Example Usage
  let myArray = [12, 5, 23, 8, 31, 10];
  let threeLargest = find3Largest(myArray);
  console.log(threeLargest); // Output: [31, 23, 12]
  