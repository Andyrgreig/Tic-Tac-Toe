const gameData = {
  board: ["","","","","","","","",""],
  player1: "Player 1",
  player2: "Player 2",
  currentPlayer: "None",
  win: [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]
}


const game = {
  
  btn:      document.querySelector("button"),
  squares:  document.querySelectorAll(".square"),
  h2:       document.querySelector("h2"),
  overlay:  document.querySelector(".overlay"),
  

  events: function() {
    // const btn = document.querySelector("button");
    game.btn.addEventListener('click',game.playGame);   
    game.squares.forEach(function (element) {element.addEventListener('click',game.selection)})
  },
  

  renderBoard: function(arr) {
    for (i = 0; i < arr.length; i++) {
      game.squares[i].innerHTML = arr[i];
    }
  },


  selection: function() {
    const i = this.dataset.cell;
    if (gameData.currentPlayer == "1" && gameData.board[i] == "") {
      gameData.board[i] = "X"
      gameData.currentPlayer = "2";
    } else if (gameData.currentPlayer == "2" && gameData.board[i] == "") {
      gameData.board[i] = "O";
      gameData.currentPlayer = "1";
    }
    game.renderBoard(gameData.board);
    game.checkWin();
  },
  

  playGame: function() {
    let person = prompt(`Player 1, please enter your name:, ${gameData.player1}}`);
    if (person) gameData.player1 = person.toUpperCase();
    person = prompt(`Player 2, please enter your name:, ${gameData.player2}}`);
    if (person) gameData.player2 = person.toUpperCase();
    game.overlay.style.visibility = "hidden";
    gameData.currentPlayer = "1";
    game.h2.innerHTML = `${gameData.player1}, IT'S YOUR MOVE!`;
    game.h2.style.visibility = "visible";   
    gameData.board.fill(""); 
    game.renderBoard(gameData.board);
  },


  checkWin: function() {
    for (let i = 0; i < gameData.win.length; i++) {
      const win = gameData.win;
      if (gameData.board[win[i][0]] == "X" && gameData.board[win[i][1]] == "X" && gameData.board[win[i][2]] == "X") {
        game.overlay.style.visibility = "visible";
        game.h2.innerHTML = `${gameData.player1} WINS!`;
      } else if (gameData.board[win[i][0]] == "O" && gameData.board[win[i][1]] == "O" && gameData.board[win[i][2]] == "O") {
        game.overlay.style.visibility = "visible";
        game.h2.innerHTML = `${gameData.player2} WINS!`;;
      }
    }
  }
    
};


game.events();


