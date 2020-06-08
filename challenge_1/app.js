//Tic Tac Toe!

//create a boolean that says if it's X or O's turn
//use this when figuring out whether to put an X or an O
var playerXTurn = true;

//create a toggle that changes who's turn it is. Default is player x's turn
var changeTurn = function() {
    playerXTurn = !playerXTurn
    //append a message to the header that says who's turn it is
    var header = document.getElementsByTagName("header");
    if (playerXTurn) {
      header.innerText = "It's your turn, player X!";
    } else {
      header.innerText = "It's your turn, player O!"
    }
}

//create a function that creates the board
var newBoard = function () {
  //each cell needs to be clickable
  var table = document.getElementsByTagName("table");

}

//create a function that is called when a square is clicked
var toggleSquare = function () {
  // this should:
  //  a) place either an x or o in that square
  //  b) change who's turn it is
  changeTurn();
  //  c) check if game is over
  isGameOver();
  //  d) refresh the board (and only the board) with the new state
}

//create a function that checks whether a player has won
var isGameOver = function () {
  //check if there are three of one type in a row
  //call hasPlayerWon twice, once with x and once with y
  if (hasPlayerWon(x)) {
    var header = document.getElementsByTagName("header");
    header.innerText = "Player X has won!";
    return true;  //?? do we want to return anything?
  } else if (hasPlayerWon(o)) {
    var header = document.getElementsByTagName("header");
    header.innerText = "Player O has won!";
    return true; //?? do we want to return anything?
  } else {
    return false; //?? do we want to return anything?
  }
}

var hasPlayerWon = function(player) {
  //iterate through the table (somehow) and see if there are three in a row anywhere
  //all three cells in a row are the same
  //all three cells in a column are the same
  //a diagonal top left to bottom right
  //a diagonal top right to bottom left
}

//create a function that resets the board when button is clicked to create a new one
var newGame = function () {
  //call create a new board function
  newBoard();
}


