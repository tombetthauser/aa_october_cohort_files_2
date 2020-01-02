
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

// stampy.paradeHelper(ellie);

herd.forEach(Elephant.paradeHelper)