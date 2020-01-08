class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e) => {
      const $li = $(e.currentTarget);
      this.makeMove($li);
    });
  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));
    $square.removeClass("b-gray");
    $square.text(this.game.currentPlayer);
    
    if (this.game.isOver()) {
      alert(`${this.game.winner()} wins!`);
      this.$el.off("click", "li");
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("grid-ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $("<li>");
        $li.data("pos", [i, j]);
        $li.addClass("grid-li b-gray");
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
