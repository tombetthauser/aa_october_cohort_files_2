describe("recSum", () => {
  it("returns 0 if the array is empty", () => {
    expect(recSum([])).toEqual(0);
  });
  
  it("works with an array of 1 element", () => {
    expect(recSum([25])).toEqual(25);
  });

  it("returns the sums of all elements in an array", () => {
    const arr = [1,2,3,4];
    expect(recSum(arr)).toEqual(10);
  });

  it("calls itself recursively", () => {
    const arr = [1,2,3,4]
    spyOn(window, 'recSum').and.callThrough();
    recSum(arr)
    expect(recSum.calls.count()).not.toBeLessThan(4);
  });
});

describe("Array.prototype.dups", () => {
  it("solves a simple example", () => {
    expect([1, 3, 0, 1].dups()).toEqual({ 1: [0, 3] });
  });

  it("finds two dups", () => {
    expect([1, 3, 0, 3, 1].dups()).toEqual({ 1: [0, 4], 3: [1, 3] });
  });

  it("finds multi-dups", () => {
    expect([1, 3, 4, 3, 0, 3].dups()).toEqual({ 3: [1, 3, 5] });
  });

  it("returns {} when no dups found", () => {
    expect([1, 3, 4, 5].dups()).toEqual({});
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

describe('Array.prototype.myReduce', () => {
  let myArray;
  const noOp = (accum, el) => accum;

  const spy = {
    sum: (accum, el) => accum + el
  };

  beforeEach(() => {
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.reduce).not.toHaveBeenCalled();
  });

  it("calls the callback, passing in the accumulator and each element", () => {
    myArray = [1, 2, 3];
    spyOn(spy, "sum").and.callThrough();

    myArray.myReduce(spy.sum);

    expect(spy.sum).toHaveBeenCalledWith(1, 2);
    expect(spy.sum).toHaveBeenCalledWith(3, 3);
  });

  it("works with a sum callback", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum)).toEqual(10);
  });

  it("works with a multiplier callback", () => {
    myArray = [4, 4, 4];
    const times = (accum, el) => accum * el;

    expect(myArray.myReduce(times)).toEqual(64);
  });

  it("uses the given argument as the initial accumulator", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp, 5)).toEqual(5);
  });

  it("uses the first item as the accumulator if none is given", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp)).toEqual(1);
  });

  it("calls the Array.prototype.myEach method", () => {
    myArray = [1, 2, 3];
    spyOn(Array.prototype, "myEach");
    myArray.myReduce(spy.sum);
    expect(Array.prototype.myEach).toHaveBeenCalled();
  });
});

describe("Array.prototype.bubbleSort", () => {
  let array;

  // it does not call sort (setup)
  beforeEach(() => {
    array = [3, 1, 2, 5, 4];
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  // it does not call sort (verification)
  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });

  it("works with an empty array", () => {
    expect([].bubbleSort()).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].bubbleSort()).toEqual([1]);
  });

  it("sorts numbers", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(array.bubbleSort()).toEqual(sortedArray);
  });

  it("will use callback if given", () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const sorted = array.bubbleSort((num1, num2) => {
      // order numbers based on descending sort of their squares
      const square1 = Math.pow(num1, 2);
      const square2 = Math.pow(num2, 2);
      if (square2 < square1) {
        return -1;
      } else if (square2 === square1) {
        return 0;
      } else {
        return 1;
      }
    });

    expect(sorted).toEqual(reversedArray);
  });

  it("does not modify the original array", () => {
    const dupedArray = array.slice();
    dupedArray.bubbleSort();
    expect(dupedArray).toEqual(array);
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

describe("Function.prototype.myBind", () => {
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
    expect(Function.prototype.myBind.toString().includes("=>"))
      .toBeFalsy('Fat arrow function not allowed (this spec will fail even if it is commented out)');  
  });
  
  it("sets the context and returns a function which can be called function style", () => {
    spyOn(Cat.prototype.sayHello, 'bind');
    expect(sally.sayHello.myBind(sally)()).toEqual("Sally says hello!");
    expect(Cat.prototype.sayHello.bind).not.toHaveBeenCalled();
  });

  it("should pass in bind-time argument to the method", () => {
    spyOn(Cat.prototype.greetOne, 'bind');
    expect(sally.greetOne.myBind(sally, markov)())
      .toEqual("Sally says hello to Markov");
    expect(Cat.prototype.greetOne.bind).not.toHaveBeenCalled();
  });

  it("should pass in two bind-time arguments to the method", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally, markov, curie)())
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("takes multiple call-time arguments", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally)(markov, curie))
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("should combine bind-time and call-time arguments", () => {
    spyOn(Cat.prototype.greetTwo, 'bind');
    expect(sally.greetTwo.myBind(sally, markov)(curie))
      .toEqual("Sally says hello to Markov and Curie");
    expect(Cat.prototype.greetTwo.bind).not.toHaveBeenCalled();
  });

  it("doesn't pass the call-time arguments to future calls", () => {
    spyOn(Cat.prototype.greetOne, 'bind');
    const boundFn = sally.greetOne.myBind(sally);
    expect(boundFn(markov)).toEqual("Sally says hello to Markov");
    expect(boundFn(curie)).toEqual("Sally says hello to Curie");
    expect(Cat.prototype.greetOne.bind).not.toHaveBeenCalled();
  });
});

