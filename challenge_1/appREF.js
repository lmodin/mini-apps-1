//Tic Tac Toe Refactor w/ SoC

//create a boolean that says if it's X or O's turn
//use this when figuring out whether to put an X or an O
var gameBoard = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
//create a function that creates the board
var newGame = function () {
  //call create a new board function
  playerXTurn = true;
  document.getElementsByTagName('header')[0].innerText = "Let's play some Tic Tac Toe!"
  document.getElementsByClassName("whoseTurn")[0].innerText = "Player X goes first";
  document.getElementById("newGame").addEventListener("click", newGame);
  //each cell needs to be clickable
  var cells = document.querySelectorAll("td");
  cells.forEach(cell => cell.addEventListener("click", toggleSquare));
  cells.forEach(cell => cell.innerText = '');
};

//========== change turn when a cell is clicked======

//create a toggle that changes who's turn it is. Default is player x's turn
var changeTurn = function() {
  playerXTurn = !playerXTurn
  //append a message to the header that says who's turn it is
  var whoseTurn = document.getElementsByClassName("whoseTurn");
  //console.log(whoseTurn[0].innerText)
  if (playerXTurn) {
    whoseTurn[0].innerText = "It's your turn, player X!";
  } else {
    whoseTurn[0].innerText = "It's your turn, player O!"
  }
};

//create a function that is called when a square is clicked
var toggleSquare = function (cell) {
  var cellNumber = cell.path[0].id - 1
  if (gameBoard[cellNumber] === 'X' || gameBoard[cellNumber] === 'O') {
    return;
  }
  //place either an x or o in that square
  if (playerXTurn) {
    cell.path[0].innerText = 'X';
    gameBoard[cellNumber] = 'X';
  } else {
    cell.path[0].innerText = 'O'
    gameBoard[cellNumber] = 'O';
  }
  //check if game is over
  if (!gameIsOver()) {
    changeTurn();
  }
};

//===========Check for end of game and determine who has won========

//create a function that checks whether a player has won
var gameIsOver = function () {
  var header = document.getElementsByTagName("header")[0];
  var whoseTurn = document.getElementsByClassName("whoseTurn");
  //call hasPlayerWon twice, once with x and once with y
  var player = playerXTurn ? 'X' : 'O';
  if (hasPlayerWon(player)) {
    header.innerText = `Player ${player} has won!`;
    whoseTurn[0].innerText = "";
    return true;
  } else if (isTie()) {
    header.innerText = "There's a tie! Play again";
    return true;
  } else {
    return false;
  }
};

var hasPlayerWon = function(player) {
  var winningStreaks = [
    [gameBoard[0], gameBoard[1], gameBoard[2], 'R1'],
    [gameBoard[3], gameBoard[4], gameBoard[5], 'R2'],
    [gameBoard[6], gameBoard[7], gameBoard[8], 'R3'],
    [gameBoard[0], gameBoard[3], gameBoard[6], 'C1'],
    [gameBoard[1], gameBoard[4], gameBoard[7], 'C2'],
    [gameBoard[2], gameBoard[5], gameBoard[8], 'C3'],
    [gameBoard[0], gameBoard[4], gameBoard[8], 'DD'],
    [gameBoard[2], gameBoard[4], gameBoard[6], 'DU']
  ]

  //check if any of the winningStreaks are true
  for (var i = 0; i < winningStreaks.length; i++) {
    if (winningStreaks[i][0] === player
      && winningStreaks[i][1] === player
      && winningStreaks[i][2] === player) {

      //add strikethrough
      var winningCells = document.getElementsByClassName(winningStreaks[i][3]);
      for (var j = 0; j < winningCells.length; j++) {
        winningCells[j].classList.add('strikethrough');
      }
      //return true, game over
      return true;
    }
  }
};

var isTie = function() {
  //iterate through the table and see if there are any empty squares
  var tie = true;
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '0') {
      tie = false;
    }
  }
  return tie;
};

newGame();