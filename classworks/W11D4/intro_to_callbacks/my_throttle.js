Function.prototype.myThrottle = function (interval) {
    let tooSoon = false;
    const args = this.__proto__.arguments;
    return () => {
        // console.log("Too soon!");
        if (tooSoon === false) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false;
            }, interval);
            this(...args);
        }
    };
}



// test code ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class Neuron {
    fire(text) {
        console.log(`Firing ${text}!`);
    }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
    neuron.fire("sdfadfwe");
}, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }