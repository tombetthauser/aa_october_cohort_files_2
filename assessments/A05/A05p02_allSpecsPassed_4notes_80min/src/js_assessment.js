// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recSum(numArr) {
    if (numArr.length < 1) return 0;
    if (numArr.length < 2) return numArr[0];
    return numArr[0] + recSum(numArr.slice(1));
}

// ~3min - 1:17m left





// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

Array.prototype.dups = function () {
    const count = {};
    const dups = {};

    this.forEach( (ele, idx) => {
        if (count[ele] == null) count[ele] = [];
        count[ele].push(idx);
    });

    dupKeys = Object.keys(count).filter(el => count[el].length > 1 );

    dupKeys.forEach( key => {
        dups[key] = count[key];
    });

    return dups;
};

// somehow took 37 minutes -- 40min left





// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    realies = [];
    dictionary.forEach( ele => {
        if (this.includes(ele) && !(realies.includes(ele))) realies.push(ele)
    });
    return realies.sort();
}

// ~3.3min -- 36min left








// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(callback) {
    for ( let i = 0; i < this.length; i++ ) callback(this[i]);
}

// ~3min --- 32min left









// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function(callback, acc) {
    newArr = this.slice();
    if (acc == null) {
        acc = newArr[0];
        newArr = newArr.slice(1);
    }

    newArr.myEach(el => {
        acc = callback(acc, el);
    })

    return acc;
}












// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// // sorted array.

Array.prototype.bubbleSort = function(callback) {
    newArray = this.slice();

    if (callback == null) {
        callback = (a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    }

    isSorted = false;
    while (isSorted === false) {
        isSorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if (callback(newArray[i], newArray[i+1]) > 0) {
                [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
                isSorted = false;
            }
        }
    }

    return newArray;
}


// 13min left -- also had to finish myReduce











// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

Function.prototype.inherits = function(ParentClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate;
    this.prototype.constructor = this;
}

// 10min left







// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

Function.prototype.myCall = function(context, ...args) {
    return this.bind(context, ...args)();
}

// ran out clock on last 2







// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.


Function.prototype.myBind = function(context, ...bargs) {
    const that = this;
    return function(...cargs) {
        return that.apply(context, bargs.concat(cargs));
    }
}