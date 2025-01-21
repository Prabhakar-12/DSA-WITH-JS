 function printNumber(num) {
    // Array of number words
    const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    // Check if the number is valid (between 0-9)
    if (num >= 0 && num <= 9) {
        console.log(numbers[num]);
    } else {
        console.log("Invalid input. Please enter a digit between 0 and 9.");
    }
}

// Examples of using the function
printNumber(5);  // Prints: Five
printNumber(0);  // Prints: Zero
printNumber(10); // Prints: Invalid input. Please enter a digit between 0 and 9.
 



function printNumber(num) {
    const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    let numStr = Math.abs(num).toString();
    let result = "";
    
    for(let digit of numStr) {
        result += numbers[digit] + " ";
    }
    
    console.log(result.trim());
}
printNumber(123);  
printNumber(5678);   
 

 