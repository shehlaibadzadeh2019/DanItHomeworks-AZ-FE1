function filterBy(arr, type) {
    return arr.filter((value => typeof value !== type))
}

let arr = ['hello', 'world', 23, '23', null];

console.log(filterBy(arr, "string"));


// Explain in your own words how the forEach loop works:
// arr.forEach() function calls the provided function once for each element of the array.
// The provided function may perform any kind of operation on the elements of the given array.
