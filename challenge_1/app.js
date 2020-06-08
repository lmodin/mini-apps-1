//Tic Tac Toe!

//create a boolean that says if it's X or O's turn
//use this when figuring out whether to put an X or an O
var playerXTurn = true;

//create a function that creates the board
var newGame = function () {
  //call create a new board function
  playerXTurn = true;
  document.getElementsByTagName('header')[0].innerText = "Let's play some Tic Tac Toe!"
  document.getElementsByClassName("whoseTurn")[0].innerText = "Player X goes first";
  //each cell needs to be clickable
  var cells = document.querySelectorAll("td");
  cells.forEach(cell => cell.innerText = '|___|');
  cells.forEach(cell => cell.addEventListener("click", toggleSquare));
  cells.forEach(cell => cell.style.backgroundColor = "white");
  document.getElementById("newGame").addEventListener("click", newGame);
};

//========== change turn with a cell is clicked======

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
  if (cell.path[0].innerText !== '|___|') {
    return;
  }
  //place either an x or o in that square
  if (playerXTurn) {
    cell.path[0].innerText = '|_X_|'
    //cell.path[0].style.backgroundColor = "green"
  } else {
    cell.path[0].innerText = '|_O_|'
    //cell.path[0].style.backgroundColor = "blue"
  }
  //check if game is over
  if (gameIsOver(cell)) {
    console.log('game over!')
  } else {
    //if game not over, change who's turn it is
    changeTurn();
  }
};

//===========Check for end of game and determine who has won========

//create a function that checks whether a player has won
var gameIsOver = function (cell) {
  var header = document.getElementsByTagName("header")[0];
  var whoseTurn = document.getElementsByClassName("whoseTurn");
  //call hasPlayerWon twice, once with x and once with y
  var player = playerXTurn ? 'X' : 'O';
  if (hasPlayerWon(player, cell)) {
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

var hasPlayerWon = function(player, cell) {
  //assume match is true until checking cells
  var rowMatches = true;
  var colMatches = true;
  //class names for diagonal cells
  var diagonalLeftCells = ['RA C1', 'RB C2', 'RC C3']
  var diagonalRightCells = ['RC C1', 'RB C2', 'RA C3']
  //assume not on diagonal until checking
  var onDiagonalLeft = false;
  var onDiagonalRight = false;


  var chosenCellText = cell.path[0].innerText
  var cellRow = cell.path[0].className.slice(0, 2)
  var cellColumn = cell.path[0].className.slice(-2)

  //checking if cell is on diagonal
  for (var l = 0; l < diagonalLeftCells.length; l++) {
    if (diagonalLeftCells[l] === cell.path[0].className) {
      onDiagonalLeft = true;
      var diagonalMatches = true;
    }
  }
  for (var r = 0; r < diagonalRightCells.length; r++) {
    if (diagonalRightCells[r] === cell.path[0].className) {
      onDiagonalRight = true;
      var diagonalMatches = true;
    }
  }

  //check if row is a match
  var row = document.getElementsByClassName(cellRow)
  for (var i = 0; i < 3; i++) {
    if (row[i].innerText !== chosenCellText) {
      rowMatches = false;
      break;
    }
  }

  //check if column is a match
  var column = document.getElementsByClassName(cellColumn)
  for (var i = 0; i < 3; i++) {
    if (column[i].innerText !== chosenCellText) {
      colMatches = false;
      break;
    }
  }

  //if on a diagonal, check for diagonal matches
  if (onDiagonalLeft) {
    for (var l = 0; l < diagonalLeftCells.length; l++) {
      if (chosenCellText !== document.getElementsByClassName(diagonalLeftCells[l])[0].innerText) {
        diagonalMatches = false;
        break;
      }
    }
  }
  if (onDiagonalRight) {
    for (var r = 0; r < diagonalRightCells.length; r++) {
      if (chosenCellText !== document.getElementsByClassName(diagonalRightCells[r])[0].innerText) {
        diagonalMatches = false;
        break;
      }
    }
  }
  //if any matches, return true;
  return rowMatches || colMatches || diagonalMatches
};

var isTie = function() {
  //iterate through the table and see if there are any empty squares
  var tie = true;
  var cells = document.querySelectorAll("td");
  cells.forEach(cell => {
    if (cell.innerText === '|___|') {
      tie = false;
    }
  });
  return tie;
};

newGame();