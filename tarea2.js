function chunk(array, size) {
    if (array.length <= size || size == 0 || array.length == 0) {
        return array;
    }
    var respaldo1 = [];
    var inversa = array.reverse();
    var devuelta = [];
    for (var i = 0; i <= inversa.length; i++) {
        for (j = 0; j < size; j++) {
            if (inversa.length != 0) {
                respaldo1.push(inversa.pop());
            }
        }
        devuelta.push(respaldo1);
        respaldo1 = [];
        i = 0;
    }
    return devuelta;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
