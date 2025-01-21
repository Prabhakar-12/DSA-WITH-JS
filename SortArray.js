// Function to sort an array
function main() {
    // Input array containing elements from 1 to n
    let arr = [3, 1, 4, 2, 5];

    // Sorting the array
    arr.sort((a, b) => a - b);

    // Print the sorted array
    process.stdout.write("Sorted array is : ");
    arr.forEach(num => process.stdout.write(num + " "));
}

// Execute the main function
main();