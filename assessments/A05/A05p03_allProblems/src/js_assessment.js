// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]

function titleize(str) {
    let nonos = ["a", "and", "of", "over", "the"];
    let copy = str.slice();
    copy = copy[0].toUpperCase() + copy.slice(1);
    copy = copy.split(" ");
    for (let i = 0; i < copy.length; i++) {
        if (!nonos.includes(copy[i])) copy[i] = copy[i][0].toUpperCase() + copy[i].slice(1);
    }
    return copy.join(" ");
}

// console.log(titleize("dog and cat"));
// 8min -- had to google touppercase
// 4min -- rusty
// 4min -- less rusty

// 4min -- rusty
// NO NOTES 












// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2) {
    let hash = {};
    for (let i = 0; i < str1.length; i++) {
        hash[str1[i]] = hash[str1[i]] || 0;
        hash[str1[i]] += 1;
    }
    for (let i = 0; i < str2.length; i++) {
        hash[str2[i]] = hash[str2[i]] || 0;
        hash[str2[i]] -= 1;
    }
    let rebool = true;
    Object.values(hash).forEach( count => {
        if (count !== 0) rebool = false;
    })
    return rebool;
}

// 9min --- super rusty
// 2.5min :)

// 4min rusty - no bugs
// NO NOTES








// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    subs = [];
    dictionary.forEach(word => {
        if (this.includes(word)) {
            subs.push(word);
        }
    });
    return subs.sort();
}

//3min --- rusty


// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function() {
    let rarr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i+1; j < this.length; j++) {
            let sub = this.slice(i, j+1);
            if (sub === sub.split("").reverse().join("")) {
                rarr.push(sub);
            }
        }
    }
    return rarr.sort();
}



// "rattatakak".symmetricSubstrings();

// 10min -- rough / rusty / bugs
// 3min --- use .split("").reverse().join("") !!

// 5min super rusty - no bugs - just jasmine bs
// NO NOTES






















// ------------------------------ SORTING ------------------------------








// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached.

Array.prototype.quickSort = function(call) {
    if (this.length < 2) return this;
    if (!call) {
        call = function(a,b) {
            if (a < b) return -1;
            return 1;
        }
    }

    let pivot = this[0];
    let left = this.slice(1).filter(ele => call(ele, pivot) === -1);
    let right = this.slice(1).filter(ele => call(ele, pivot) !== -1);

    left = left.quickSort(call);
    right = right.quickSort(call);

    return [...left, pivot, ...right];
}

// ~15min - super rusty -- peeked at solution
// 7min --- dumb bug, no 'lets' -- super non-descriptive
//4min -- no real issues
//3min -- zero bugs

// ~8min - no serious bugs - super rusty
// NO NOTES













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
// sorted array.

Array.prototype.bubbleSort = function(call) {
    let copy = this.slice();
    if (!callback) callback = function(a, b) {if (a < b) return -1};
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < copy.length -1; i++) {
            if (call(copy[i], copy[i+1]) !== -1) {
                [copy[i+1], copy[i]] = [copy[i], copy[i+1]]
                sorted = false;
            }
        }
    }
    return copy;
}

//12min -- got stuck in debugger?
//4min - no bugs

// 6min no bugs -- rusty
// NO NOTES









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



// 15min -- had to peek -- length issue in merge while loop?
// 7min -- dumb bug - didnt devide length for mid
// 5.5min -- dumb bug -- used shift instead of shift()
// 7min -- dumb bug -- righ instead of right...


// 15min -- super rusty -- dumb pop instead of shift bug in merge -- also no base case
// NO NOTES






// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alpha) {
    alpha = alpha || "abcdefghijklmnopqrstuvwxyz".split("");

    let arr = str.split("");
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            idx1 = alpha.indexOf(arr[i]);
            idx2 = alpha.indexOf(arr[i+1]);

            if (idx1 > idx2) {
                [[arr[i+1]], [arr[i]]] = [[arr[i]], [arr[i+1]]];
                sorted = false;
            }
        }
    }

    return arr.join("");
}


// 13min --- had to peek -- dumb error calling split() instead of split("")
// 4min --- only minor syntax errs









// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

function binarySearch(arr, target) {
    if (arr.length === 0) return -1;

    let midx = Math.floor(arr.length / 2);
    let middle = arr[midx];
    let left = arr.slice(0, midx);
    let right = arr.slice(midx + 1);

    if (middle > target) {
        return binarySearch(left, target);
    } else if (target > middle) {
        let sub = binarySearch(right, target);
        if (sub === -1) return -1;
        return (sub + midx + 1);
    } else {
        return midx;
    }
}

// console.log(binarySearch([1,2,3,4,5], 10));

// 22min with notes ... bad
// 20min with notes... wtf
// 4min no notes!
// 4min no notes!!
// 3min no notes!!!

// 8min no notes -- error on return (mid + sub + 1)
// 5min wierd -1 bug
// 3.5 min -- left / middle bug -- no biggie














// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of
// the array and any interior arrays. A deep duplication means that the array 
// itself, as well as any nested arrays (no matter how deeply nested) are duped 
// and are completely different objects in memory than those in the original 
// array.

function deepDup(arr) {
    let copy = [];
    arr.forEach(ele => {
        if (ele instanceof Array) {
            copy.push(deepDup(ele));
        } else {
            copy.push(ele)
        }
    })
    return copy;
}

// 5min rusty -- no notes
// 2min!




// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(string, key) {
    if (key.length === 0) return true;
    if (string.length === 0) return false;

    if (key[0] === string[0]) return stringIncludeKey(string.slice(1), key.slice(1));
    return stringIncludeKey(string.slice(1), key);
}

// 4min -- super rusty!!




// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
    if (n === 0) return 0;
    if (n === 1) return 2;

    return (n * 2) + firstEvenNumbersSum(n-1);
}

// ~3min!! -- super rusty




// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

function digitalRoot(num) {
    while (num > 9) {
        num = Math.floor(num / 10) + (num % 10)
    }
    return num;
}

// ~3.5min -- super rusty!!



// Write a function, `exponent(b, n)`, that calculates b^n recursively. 
// Your solution should accept negative values for n. Do NOT use ** or Math.pow

function exponent(b, n) {
    if (n === 0) return 1;
    if (n === 1) return b;
    if (n > 0) {
        return b * exponent(b, (n-1));
    } else {
        return 1 / b * exponent(b, (n+1))
    }
}

// ~4min -- super rusty!!



// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

function fib(n) {
    if (n < 3) return 1;
    return fib(n-2) + fib(n-1);
}

function fibsSum(n) {
    if (n < 3) return n;
    return fibsSum(n-1) + fib(n);
}

// 8min - peeked at notes
// 9min - peeked again
// 2min!! no notes
// 1.5min!!! no notes :)



// Write a recursive function, `factorialsRec(num)`, that returns the first 
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
    if (num === 1) return [1];

    let facts = factorialsRec(num - 1);
    let last = facts[facts.length - 1];

    facts.push(last * (num - 1));
    return facts;
}

// 15min -- peeked -- sooo rusty ::((
// 3min no notes!
// 2min no notes!!
// 2min again! yay!



// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recSum(arr) {
    if (arr.length < 1) return 0;
    if (arr.length < 2) return arr[0];

    return arr[0] + recSum(arr.slice(1));
}

// 2.5min -- dumb bug, no prob













// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(arr) {
    const rarr = [];

    for (let i = 0; i < arr[0].length; i++) {
        let sub = [];
        for (let j = 0; j < arr.length; j++) {
            sub.push(arr[j][i]);
        }
        rarr.push(sub);
    }

    return rarr;
}

// ~5min rusty
// 2.5min!!









// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

String.prototype.mySlice = function(startIdx, endIdx) {
    let restr = "";

    if (endIdx == null) {
        endIdx = this.length;
    }

    for (let i = startIdx; i < endIdx && i < this.length; i++) {
        restr += this[i];
    }

    return restr;
}

// 22min -- stupid bugs -- peeked -- fu jasmine
// 3min -- no notes
// 2min - no notes, w/e fu jasmine





// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

// 10:28

Array.prototype.myRotate = function(time = 1) {
    let copy = this.slice();
    if (time > 0) {
        time = time % this.length;
        for (let i = 0; i < time; i++) {
            copy.push(copy.shift());
        }
    } else {
        time = (-1 * time) % this.length;
        for (let i = 0; i < time; i++) {
            copy.unshift(copy.pop());
        }
    }
    return copy;
}

// console.log([1,2,3,4,5,6,7,8].myRotate(-16));

// ~15min while talking to dan -- no problems








// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.

// 10:55

function factors(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0 && !(arr.includes(i))) {
            arr.push(i);
        }
    }
    return arr;
}

// console.log(factors(10));

// ~20min super distracted - over thought it








// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function() {
    let flat = [];
    this.forEach(ele => {
        if (ele instanceof Array) {
            flat = flat.concat(ele.myFlatten());
        } else {
            flat.push(ele);
        }
    })
    return flat;
}

// 10+min peeked -- dumb syntax errs
// 2min no notes
// 2min no notes!




// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

function myReverse(arr) {
    let rev = [];
    for (i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}

// 2min -- super rusty



// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

Array.prototype.myJoin = function(sep = '') {
    let joined = '';
    this.forEach( (ele, idx) => {
        joined += `${ele}`;
        if (idx < this.length - 1) joined += sep;
    });
    return joined;
}

// 11min -- stupid jasmine bugs
// 3min with dumb 'function' syntax stupidness 








// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.

Array.prototype.median = function() {
    let copy = this.sort();
    if (copy.length < 1) return null;
    let midx = Math.floor(copy.length / 2);
    if (copy.length % 2 === 0) {
        return (copy[midx - 1] + copy[midx]) / 2
    } else {
        return copy[midx]
    }
}

// console.log([1,2,4,3].median())

// 6min - had to peek - they didn't fucking say it needed to be FUCKING sorted FUCK YOU






// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

Array.prototype.dups = function() {
    let hash = {};
    for (let i = 0; i < this.length; i++) {
        hash[this[i]] = hash[this[i]] || [];
        hash[this[i]].push(i);
    }
    let hash2 = {};
    for (let i = 0; i < this.length; i++) {
        if (hash[this[i]].length > 1) hash2[this[i]] = hash[this[i]]
    }
    return hash2;
}

// console.log([1,2,3,4,3,2].dups());

// 4min super rusty




// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

function doubler(arr) {
    return arr.map(ele => (ele * 2))
}

// 2min super rusty















// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.

function myFind(arr, call) {
    let ret;
    arr.forEach(ele => {
        if (call(ele) && !ret) ret = ele;
    })
    return ret;
}

// 3min super rusty














// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.


function primes(num) {
    let rarr = [];
    let i = 2;
    while (rarr.length < num) {
        if (isPrime(i)) rarr.push(i);
        i++;
    }
    return rarr;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 11min super rusty -- 1 is not a prime? sure whatever
// 2.5 min -- no bugs



// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function() {
    let pairs = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if ((this[i] + this[j]) === 0) pairs.push([i, j]);
        }    
    }    

    return pairs;
}    

// console.log([1,2,-1,-2,3].twoSum())

// / 4min super rusty -- dumb bugs no biggie














// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.


Function.prototype.myApply = function(cont, args = []) {
    return this.bind(cont, ...args)();
}

// 7min with notes -- close though
// ~2min no notes!
// 1.5min no notes!
// 1.75min no notes!



// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

Function.prototype.myCall = function(cont, ...args) {
    return this.bind(cont, ...args)();
}

// 2min no notes!
// 1.5min no notes!!
// 1.5min no notes!!!



// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

Function.prototype.myBind = function(cont, ...bargs) {
    let that = this;
    return function(...cargs) {
        return that.apply(cont, bargs.concat(cargs));
    }
}

// ~4min with notes
// 2min no notes!
// 2min no notes - talked it out!
// 2min no notes - talked it out again - this / that makes sense now, its the original function!!



// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function(num) {
    let argarr = [];
    let ofunc = this;
    return function _curry(...args) {
        argarr.push(...args);
        if (argarr.length < num) return _curry;
        return ofunc(...argarr);
    }
}

// ~6min with notes :(
// 2min no notes no bugs!
// 2min again no bugs!!
// 2min no bugs!!!





// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate;
    this.constructor = this;
}

// 4min no notes - just parent.prototype bug!!
// ~2min no bugs!!
// 2min no bugs!!!















// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

Array.prototype.myEach = function(call) {
    for (let i = 0; i < this.length; i++) call(this[i]);
}

// 1min no notes no bugs!


// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

Array.prototype.myReduce = function(call, acc) {
    let copy = this.slice();
    if (acc == null) {
        acc = copy[0];
        copy = copy.slice(1);
    }
    copy.myEach(ele => {
        acc = call(acc, ele);
    });
    return acc;
}

// 5min - didnt use myEach, dumb, no biggie



// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

Array.prototype.myReject = function(call) {
    let rarr = [];
    this.myEach(ele => {
        if (!call(ele)) rarr.push(ele);
    });
    return rarr;
}

// 4min super rusty -- dumb bugs no biggies



// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

Array.prototype.mySome = function(call) {
    let rebool = false;
    this.myEach(ele => {
        if (call(ele)) rebool = true;
    })
    return rebool;
}

// 2min no bugs!



// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

Array.prototype.myFilter = function(call) {
    let rarr = [];

    this.myEach( ele => {
        if (call(ele)) rarr.push(ele)
    });

    return rarr;
}

// 2min no bugs!


// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

Array.prototype.myEvery = function(call) {
    let rebool = true;
    this.myEach( ele => {
        if (!call(ele)) rebool = false;
    });
    return rebool;
}

// 2min no bugs!!