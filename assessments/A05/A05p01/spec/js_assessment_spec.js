describe("stringIncludeKey", () => {
  it("returns true for the same string", () => {
    expect(stringIncludeKey("adblfci", "abc")).toEqual(true);
  });

  it("handles keys with duplicate characters: case 1", () => {
    expect(stringIncludeKey("adbblfci", "abbc")).toEqual(true);
  });

  it("handles keys with duplicate characters: case 2", () => {
    expect(stringIncludeKey("adbclfci", "abbc")).toEqual(false);
  });

  it("returns false if the key characters are in the wrong order", () => {
    expect(stringIncludeKey("dblfcia", "abc")).toEqual(false);
  });

  it("returns false if the string doesn't contain the key", () => {
    expect(stringIncludeKey("db", "abc")).toEqual(false);
  });

  it("calls itself recursively", () => {
    spyOn(window, "stringIncludeKey").and.callThrough();
    stringIncludeKey("adbblfci", "abbc");
    expect(stringIncludeKey.calls.count()).not.toBeLessThan(4);
  });
});

describe("doubler", () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3]
  });

  it("doubles the elements of the array", () => {
    expect(doubler(array)).toEqual([2, 4, 6]);
  });

  it("does not modify the original array", () => {
    const dupArray = array.slice(0);
    doubler(array);

    expect(array).toEqual(dupArray);
  });
});

describe("String.prototype.realWordsInString", () => {
  it("finds a simple word", () => {
    const words = "asdfcatqwer".realWordsInString(["cat", "car"]);
    expect(words).toEqual(["cat"]);
  });

  it("doesn't find words not in the dictionary", () => {
    const words = "batcabtarbrat".realWordsInString(["cat", "car"]);
    expect(words).toEqual([]);
  });

  it("does not return duplicates", () => {
    const words = "catcarcat".realWordsInString(["cat", "car"]);
    expect(words).toEqual(["car", "cat"])
  });

  it("finds words at the end of the string", () => {
    const words = "cabcarcat".realWordsInString(["cat", "car", "cab"]);
    expect(words).toEqual(["cab", "car", "cat"]);
  });

  it("finds words within words", () => {
    const dictionary = ["bears", "ear", "a", "army"];
    const words = "erbearsweatmyajs".realWordsInString(dictionary);
    expect(words).toEqual(["a", "bears", "ear"]);
  });
});

describe("Array.prototype.myEach", () => {
  let originalArray;
  let testArray;
  let result;
  const spy = {
    callback: (el) => { return el + 1; }
  };

  beforeEach(() => {
    spyOn(Array.prototype, 'forEach').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
  });

  it("calls the callback passed to it", () => {
    spyOn(spy, "callback");
    [1, 2, 3].myEach(spy.callback);
    expect(spy.callback).toHaveBeenCalled();
  });

  it("yields each element to the callback and has no return value", () => {
    spyOn(spy, "callback");
    result = [1, 2].myEach(spy.callback);
    expect(spy.callback).toHaveBeenCalledWith(1);
    expect(spy.callback).toHaveBeenCalledWith(2);
    expect(result).toBeUndefined();
  });

  it("does not modify the original array", () => {
    originalArray = ["original array"];
    testArray = ["original array"];
    testArray.myEach(spy.callback);
    expect(testArray).toEqual(originalArray);
  });
});

describe('Array.prototype.myReject', () => {
  let a;
  const spy = {
    callback: x => x > 1
  }

  beforeEach(() => {
    a = [1, 2, 3];
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.filter).not.toHaveBeenCalled();
  });

  it('returns elements that do not match the passed in block', () => {
    expect(a.myReject(spy.callback)).toEqual([1]);
  });

  it('returns all elements if no elements match the block', () => {
    const callback = x => x === 4;
    expect(a.myReject(callback)).toEqual([1, 2, 3]);
  });

  it('returns an empty array if all elements match the block', () => {
    const callback = x => x < 4;
    expect(a.myReject(callback)).toEqual([]);
  });

  it("calls the Array.prototype.myEach method", () => {
    spyOn(a, "myEach");
    a.myReject(spy.callback);
    expect(a.myEach).toHaveBeenCalled();
  });
});

describe("Array.prototype.mergeSort", () => {
  let array;

  beforeEach(() => {
    array = [1, 5, 2, 4, 3];
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });

  it("works with an empty array", () => {
    expect([].mergeSort()).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].mergeSort()).toEqual([1]);
  });

  it("sorts numbers", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(array.mergeSort()).toEqual(sortedArray);
  });

  it("sorts arrays with duplicates", () => {
    expect([5, 4, 3, 3, 2, 1].mergeSort()).toEqual([1, 2, 3, 3, 4, 5]);
  });

  it("uses a comparator function if passed in", () => {
    const reversed = array.mergeSort((x, y) => {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return 1;
      } else {
        return -1;
      }
    });
    expect(reversed).toEqual([5, 4, 3, 2, 1]);
  });

  it("does not modify original", () => {
    const dupedArray = [1, 5, 2, 4, 3];
    dupedArray.mergeSort();
    expect(dupedArray).toEqual(array);
  });

  it("calls the merge helper method", () => {
    spyOn(window, 'merge');
    array.mergeSort();
    expect(merge).toHaveBeenCalled();
  });
});

describe("Function.prototype.inherits", () => {
  let Animal;
  let Dog;
  let dog;

  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    spyOn(Object, 'assign').and.callThrough();
    spyOn(Object, 'setPrototypeOf').and.callThrough();
    
    Animal = function() {
      this.name = "Yogi";
    };

    Animal.prototype.makeNoise = function() { return "Hi!"; };

    Dog = function() {
      this.age = 7;
    };

    Dog.inherits(Animal);
    Dog.prototype.bark = function() { return "Woof!"; };
    dog = new Dog();
  });

  afterEach(() => {
    expect(Object.create).not.toHaveBeenCalled();
    expect(Object.assign).not.toHaveBeenCalled();
    expect(Object.setPrototypeOf).not.toHaveBeenCalled();
    expect(Function.prototype.inherits.toString().includes("__proto__"))
      .toBeFalsy('Do not modify the __proto__ property directly (this spec will fail even if it is commented out)');  
  });

  it("should properly set up the prototype chain between a child and parent", () => {
    expect(dog.bark()).toBe("Woof!");
    expect(dog.makeNoise()).toBe("Hi!");
  });

  it("should not call the parent's constructor function", () => {
    expect(dog.name).toBeUndefined();
  });

  it("should maintain separation of parent and child prototypes", () => {
    Dog.prototype.someProperty = 42;
    const animal = new Animal();
    expect(animal.someProperty).toBeUndefined();
    expect(animal.makeNoise()).toBe("Hi!");
  });

  it("should properly work for longer inheritance chains", () => {
    const Poodle = function () { this.name = "Bill"; };
    Poodle.inherits(Dog);
    Poodle.prototype.shave = function() { return "Brrr."; };
    const poodle = new Poodle();
    
    expect(poodle.name).toBe("Bill");
    expect(poodle.shave()).toBe("Brrr.");
    expect(poodle.makeNoise()).toBe("Hi!");
    expect(poodle.bark()).toBe("Woof!");
  });
});

describe("Function.prototype.myCall", () => {
  let Cat;
  let sally, markov, curie;

  beforeEach(() => {
    Cat = function Cat(name) {
      this.name = name;
    };

    Cat.prototype.sayHello = function () {
      return this.name + " says hello!";
    };

    Cat.prototype.greetOne = function (otherCat) {
      return this.name + " says hello to " + otherCat.name;
    };

    Cat.prototype.greetTwo = function (otherCat1, otherCat2) {
      return this.name + " says hello to " + otherCat1.name + " and " +
        otherCat2.name;
    };

    sally = new Cat("Sally");
    markov = new Cat("Markov");
    curie = new Cat("Curie");
  });

  afterEach(() => {
    const stringifiedFn = Function.prototype.myCall.toString();
    expect(stringifiedFn.includes("call"))
      .toBeFalsy('Function.prototype.call not allowed (spec will fail even if it is commented out)');
    expect(stringifiedFn.includes("apply"))
      .toBeFalsy('Function.prototype.apply not allowed (spec will fail even if it is commented out)');
  });

  it("invokes the function it is called on", () => {
    expect(sally.greetOne.myCall(sally, markov)).toEqual("Sally says hello to Markov");
  });

  it("can take any number of arguments", () => {
    expect(sally.greetTwo.myCall(sally, markov, curie))
      .toEqual("Sally says hello to Markov and Curie");
  });

  it("should call the function method style on the context", () => {
    expect(sally.sayHello.myCall(markov)).toEqual("Markov says hello!");
  });
});

describe("Function.prototype.myCurry", () => {
  it("if numArgs is 1, should call function first time the curried function is invoked with an argument", () => {
    const echo = function (arg) {
      return arg;
    };

    const first = echo.myCurry(1);
    expect(first("one")).toMatch(/one/);
  });

  it("curries arguments and calls function after called with total num args", () => {
    const dubs = function (a, b, c) {
      return (a + b + c) * 2;
    };

    const curriedSum = dubs.myCurry(3);
    const result = curriedSum(1)(2)(3);
    expect(result).toEqual(12);
  });

  it("should return itself if there are too few arguments", () => {
    const threeSum = function (x, y, z) {
      return x + y + z;
    };

    const myCurryResult = threeSum.myCurry(3)(1)(2);
    expect(myCurryResult).not.toEqual(6);
    expect(typeof (myCurryResult)).toEqual("function");
  });
});

