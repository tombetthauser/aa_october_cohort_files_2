// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(string, key) {
    if (key.length === 0) return true;
    if (string.length === 0) return false;
    return (key[0] === string[0]) ? stringIncludeKey(string.slice(1), key.slice(1)) : stringIncludeKey(string.slice(1), key);
}

// ~12min



// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

function doubler(arr) {
    const newArr = arr.slice();
    return newArr.map(el => el * 2);
}

// ~1.5min






// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    const returnArr = [];
    dictionary.forEach(word => {
        if (this.includes(word) && !(returnArr.includes(word))) returnArr.push(word);
    });
    return returnArr.sort();
}

// ~6min --- 1:00 left







// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// ~1min --- 59m left










// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

Array.prototype.myReject = function(callback) {
    const returnArr = [];
    this.myEach( ele => {
        if (callback(ele) === false) returnArr.push(ele);
    });
    return returnArr;
}

// ~4min --- 55m left








// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. 
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

Array.prototype.mergeSort = function(callback) { // callback => -1 / 0 / 1
    if (this.length < 2) return this;
    
    if (callback == null) {
        callback = (a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    }

    let mid = Math.floor(this.length / 2);
    let left = this.slice(0, mid).mergeSort(callback);
    let right = this.slice(mid).mergeSort(callback);

    return merge(left, right, callback);
}

function merge(left, right, callback) {
    let sorted = [];
    while (left.length > 0 && right.length > 0) {
        if (callback(left[0], right[0]) > -1) {
            sorted.push(right[0]);
            right = right.slice(1);
        } else {
            sorted.push(left[0]);
            left = left.slice(1);
        }
    }
    return sorted.concat(left).concat(right);
}

// 23min? --- 32 min left











// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

Function.prototype.inherits = function(ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

// 2 times with notes, 1 time without --- ~8min --- 24m left








// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

Function.prototype.myCall = function (context, ...args) {
    return this.bind(context, ...args)();
}

// 1 time with notes, 2 times without notes -- ~4min --- 19m left









// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.




Function.prototype.myCurry = function(numArgs) {
    let args = [];
    let func = this;

    return function _myCurry(ele) {
        args.push(ele);
        if (args.length < numArgs) {
            return _myCurry;
        } else {
            return func(...args);
        }
    }
}

// 2 times with notes, 3 times without notes --- ~12min --- 7min to spare


// it was clear to me then, after so many years, looking into his vacant, dilluded eyes 
// that the art world was never going to give me the life that he Headers, that he along with his generation
// had been telling me a SVGGeometryElement, a story that I wanted to be true, where everything was ok,
// where their positions were earned, where hard work was rewarded, where those who suffered and failed and
// wasted their lives clewing up the walls of a pit they would never escape deserved their fate
// because they didn't work hard enough or committed some mortal sin against the art gods
// I knew he was lost, and that I'd be lost if I spent another day, another month, another year
// following him and his lost path
