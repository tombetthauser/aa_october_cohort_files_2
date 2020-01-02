
const titleize = (namesArr, callback) => {
    namesArr.forEach(name => {
        callback(`Mx. ${name} Jingleheimer Schmidt`)
    });
}

// titleize(["Tom", "Mike", "Erin"], console.log);







function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes phrRRRRRRRR!!!`)
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    let randIndex = Math.floor(Math.random() * this.tricks.length);
    let randTrick = this.tricks[randIndex];
    console.log(`${this.name} is ${randTrick}!`)
}

// const stampy = new Elephant('Stampy', 84, ['stamping', 'crushing things']);

// stampy.trumpet();
// console.log(stampy.tricks);
// stampy.addTrick("hurting people")
// console.log(stampy.tricks);
// stampy.play();
// stampy.play();
// stampy.play();
// console.log(stampy.height);
// stampy.grow()
// console.log(stampy.height);
// stampy.grow()
// console.log(stampy.height);






let stampy = new Elephant('Stampy', 284, ['stamping', 'crushing things', 'hurting people']);
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [stampy, ellie, charlie, kate, micah];


Elephant.paradeHelper = function(elephant) {
    const verbs = ['walks', 'trudges', 'stamps', 'struts', 'rolls', 'clomps', 'trots']
    let randIndex1 = Math.floor(Math.random() * verbs.length)
    let randIndex2 = Math.floor(Math.random() * elephant.tricks.length)
    console.log(`${elephant.name} the elephant is ${elephant.tricks[randIndex2]} as it ${verbs[randIndex1]} by!`)
}

// herd.forEach(Elephant.paradeHelper)


// function dinerBreakfast() {
//     let order = "I'd like cheesy scrambled eggs please.";
//     console.log(order);

//     return function (food) {
//         order = `${order.slice(0, order.length - 8)} and ${food} please.`;
//         console.log(order);
//     };
// };


function resolutionsList() {
    let list = "I'd like to get more exercise this year.";
    console.log(list);

    return function (resolution) {
        list = `${list.slice(0, list.length - 11)} and ${resolution} this year.`;
        console.log(list);
    };
};

// an anonymous closure seems to be an anonymous function, a function that isn't named
// that lives inside a named function as the return value
// the named function can have a starting set of variables etc that are manipulated by the
// anonymous callback function
// the named function can then be called as the value of a new variable
// that variable will hold the starting values of any variables
// we can now treat that variable like a function
// as the return value of the function was that anonymous function
// we can now pass arguments into this variable as though it were a function
// when we do this the function can perminantly change any of the stored variables
// then we can create other versions of this function in other variables
// that will have their own independent variables that can be changed

let erinsList = resolutionsList();
let tomsList = resolutionsList();

erinsList("be a great mom")
erinsList("detach emotionally from my job")
erinsList("drink more juice")
erinsList("feel connected to my studio")

tomsList("get a great job")
tomsList("be a great dad")
tomsList("be a great husband")
tomsList("make some dope art")







