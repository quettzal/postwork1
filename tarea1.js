function deepEqual(a, b) {
    if ( typeof a === 'object' && a !== null && !Array.isArray(a)  ){
        if ( typeof b === 'object' && b !== null && !Array.isArray(b)  ){
            if (JSON.stringify(a) === JSON.stringify(b)){
                return true;
            }
            return false;
        }
    }
    if (typeof(a) == typeof(b)){
        return a === b;
    }else return(false);
}
   
const john = {
    firstName: 'John',
    lastName: 'Doe'
}
   
   console.log('Test 1:', deepEqual(1, 1)) // true
   console.log('Test 2:', deepEqual(1, '1')) // false
   console.log('Test 3:', deepEqual('mama', 'mama')) // true
   console.log('Test 4:', deepEqual(true, true)) // true
   console.log('Test 5:', deepEqual('mama', 'papa')) // false
   console.log('Test 6:', deepEqual(false, false)) // true
   console.log('Test 7:', deepEqual(true, false)) // false
   console.log('Test 8:', deepEqual(1, 1.0)) // true
   console.log('Test 9:', deepEqual(myCar, myCar2)) // true
   console.log('Test 10:', deepEqual(john, john)) // true
   console.log('Test 11:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
   console.log('Test 12:', deepEqual(john, { firstName: 'John' })) // false