function removeDuplicates(array) {
    const s = new Set();
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (!s.has(array[i])) {
            s.add(array[i]);
            array[index++] = array[i];
        }
    }
    // Replace remaining positions with "_"
    for (let i = index; i < array.length; i++) {
        array[i] = "_";
    }
    return index;
}

const array = [1, 2, 2, 3, 3, 4, 5, 4, 6, 6, 7, 8, 6];
const newSize = removeDuplicates(array);
console.log("Modified Array:", array);
