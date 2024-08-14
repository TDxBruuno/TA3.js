function removeFromArray(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    console.log(array);
}

removeFromArray([1, 2, 3, 4, 5], 3); // [1, 2, 4, 5]