// Write a recursive function `stringIncludeKey(string, key)` that takes in
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false
function stringIncludeKey(string, key) {
  if (!key.length) return true;

  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);

  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1));
}

// Write a function, `doubler(arr)`, that returns a copy of the input array
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]
function doubler(array) {
  return array.map(el => el * 2);
}

// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

// Solution 1
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];

  dictionary.forEach((el) => {
    if (this.includes(el)) realWords.push(el);
  });
  return realWords.sort();
};

// Solution 2
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let word = this.slice(i, j+1);

      if (dictionary.indexOf(word) > -1) {
        if (realWords.indexOf(word) < 0) realWords.push(word);
      }
    }
  }

  return realWords.sort();
};

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.
Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// Write an `Array.prototype.myReject(callback)` method. Return a new array,
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]
Array.prototype.myReject = function (callback) {
  const selection = [];

  this.myEach(el => {
    if (!callback(el)) {
      selection.push(el);
    }
  });

  return selection;
};

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
Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) func = (left, right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  };

  const midpoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midpoint).mergeSort(func);
  const sortedRight = this.slice(midpoint).mergeSort(func);
  return merge(sortedLeft, sortedRight, func);
};

function merge(left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    switch (comparator(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left, right);
  return merged;
}

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// Write a `Function.prototype.myCall(context)` method, that accepts an object,
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.
Function.prototype.myCall = function (context, ...args) {
  return this.bind(context)(...args);
};

// Also works (passing arguments at bind-time vs call-time)
Function.prototype.myCall = function (context, ...args) {
  return this.bind(context, ...args)();
};

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.
Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let fcn = this;
  return function _myCurry (el) {
    nums.push(el);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return fcn(...nums);
    }
  };
};

