for (let i = 1; i < n; i++) {
    if (array[i] <= array[i - 1]) {
        return "The Array is not Sorted array";
    }
}
/* Condition: if (array[i] <= array[i - 1])
    This checks if any element is less than or equal to the previous element.
    Effect: If two consecutive elements are equal, it will return "The Array is not Sorted array".
    Implication: This version treats an array with duplicate elements as not sorted. */
    for (let i = 1; i < n; i++) {
        if (array[i] < array[i - 1]) {
            return "The Array is not Sorted array";
        }
    }
   /*  Condition: if (array[i] < array[i - 1])
    This checks if any element is strictly less than the previous element.
    Effect: Duplicate elements are allowed because <= is replaced by <.
    Implication: This version treats an array with duplicate elements as sorted. */
    /* Summary:
    Using < → Allows duplicates and checks for non-decreasing order.
    Using <= → Enforces strictly increasing order (no duplicates  allowed).*/