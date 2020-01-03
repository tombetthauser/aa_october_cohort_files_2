const readline = require('readline');


// global.setTimeout(() => {
//     console.log('HAMMER TIME!');
// }, 2000);


function hammerTime (time) {
    global.setTimeout(() => {
        console.log(`${time} is HAMMER TIME!`)
    })
}




const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question('Would you like some tea? ', (res) => {
    isTea = res;
    console.log(`You said ${isTea}.`)
    reader.question('Would you like a cookie? ', (res) => {
        isCookie = res;
        console.log(`You said ${isCookie}.`);

        const teaSentence = (isTea === "yes") ? "Here's your tea." : "I poured your tea down the sink.";
        const cookieSentence = (isCookie === "yes") ? "Here's your cookie." : "I threw your cookie in the garbage.";
        
        console.log(teaSentence);
        console.log(cookieSentence);

        reader.close();
    });
});




// reader.close();

// function teaAndBiscuits() {
//     let first, second;

//     reader.question('Would you like some tea?', (res) => {
//         first = res;
//         console.log(`You replied ${res}.`);
//     });

//     reader.question('Would you like some biscuits?', (res) => {
//         second = res;
//         console.log(`You replied ${res}.`);
//     });

//     const firstRes = (first === 'yes') ? 'do' : 'don\'t';
//     const secondRes = (second === 'yes') ? 'do' : 'don\'t';
//     console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//     reader.close();
// }

// teaAndBiscuits();






// window.setTimeout(function () { 
//     alert('HAMMER TIME!'); 
// }, 5000);

// function hammerTime(time) { 
//     window.setTimeout(function () { 
//         alert(`${time} is HAMMER TIME!`); 
//     }); 
// }
// const readline = require('readline'); 
// const reader = readline.createInterface({ 
//     input: process.stdin, 
//     output: process.stdout 
// }); 
// function teaAndBiscuits() { 
//     reader.question('Would you like some tea?', function (res) { 
//         console.log(`You replied ${res}.`); 
//         reader.question('Would you like some biscuits?', function (res2) { 
//             console.log(`You replied ${res2}.`); 
//             const first = (res === 'yes') ? 'do' : 'don\'t'; 
//             const second = (res2 === 'yes') ? 'do' : 'don\'t'; 
//             console.log(`So you ${first} want tea and you ${second} want biscuits.`); 
//             reader.close(); 
//         }); 
//     }); 
// }
// function Cat() { this.name = 'Markov'; this.age = 3; }
// function Dog() { this.name = 'Noodles'; this.age = 4; }
// Dog.prototype.chase = function (cat) { console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`) }; const Markov = new Cat(); const Noodles = new Dog(); Noodles.chase(Markov); Noodles.chase.call(Markov, Noodles); Noodles.chase.apply(Markov, [Noodles]);

