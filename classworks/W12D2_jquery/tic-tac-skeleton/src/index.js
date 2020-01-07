const View = require("./ttt-view.js")// require appropriate file
const Game = require("./game.js")// require appropriate file

// const Board = require("./board");


$(() => {
  // Your code here
    const $el = $("figure.ttt");
    const g = new Game();
    const v = new View(g, $el);
  });
