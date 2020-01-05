function sum() {
    let sum = 0;
    Array.from(arguments).forEach(element => {
        sum += element;
    });
    return sum;
}

// const thing = sum(1, 2, 3)
// console.log(thing)

// function sum2(...args) {
//     let sum = 0;
//     args.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// const thing = sum2(1, 2, 3, 5, 6, 1, 2, 4);
// console.log(thing);

Function.prototype.myBind = function(ctx, ...bindArgs) {
    console.log(Array.from(arguments))
    arr = Array.from(arguments)
    return (...callArgs) => this.apply(arr.shift(), arr);
};

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
    return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

//////inheritance

Function.prototype.inherit = function(parent) {
    var Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

Function.prototype.inherit2 = function(parent) {
    function Surrogate() {}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
};

Function.prototype.curry = function (argCount) {
    const args = [];
    const func = this;

    function curryFunc() {

        argArr = Array.from(arguments)

        argArr.forEach(element => {
            args.push(element)
        });

        if (args.length === argCount) {
            return func(...args);
        } else {
            return curryFunc;
        };
    };
    return curryFunc;
};

// console.log(sumThree(3,1,2));
console.log(sumThree.curry(3)(1)(2)(3));

// console.log(sumThree.curry(3)(1, 3));
console.log(sumThree.curry(3)(1, 3, 4));
console.log(sumThree.curry(3)(1, 3)(4));

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
















// // function testSum(...args) {
// //     sum = 0;
// //     args.forEach(el => sum += el)
// //     return sum;
// // }

// // Function.prototype.func = function() {
// //     return () => this;
// // }

// // console.log(func.testSum()(1,2,3));