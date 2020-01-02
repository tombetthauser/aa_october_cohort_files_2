
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

const stampy = new Elephant('Stampy', 84, ['stamping', 'crushing things']);

stampy.trumpet();
console.log(stampy.tricks);
stampy.addTrick("hurting people")
console.log(stampy.tricks);
stampy.play();
stampy.play();
stampy.play();
console.log(stampy.height);
stampy.grow()
console.log(stampy.height);
stampy.grow()
console.log(stampy.height);