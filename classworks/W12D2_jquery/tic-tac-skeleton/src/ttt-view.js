class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {
    
  }

  makeMove($square) {}

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
