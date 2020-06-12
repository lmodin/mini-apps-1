import React from 'react'

var createBoard = function {
  var x = ['1', '2', '3', '4', '5', '6', '7'];
  var y = ['1', '2', '3', '4', '5', '6'];
  var slots = [];
  for (var j = y.length - 1; j >= 0; j--) {
    var row = [];
    for (var i = 0; i < x.length; i++) {
      row.push(y[j] + x[i])
    }
    slots.push(row)
  }
  return slots
}

export default createBoard
//each square will be a stringed number.
//square % 10 will be the column number
//Math.floor(square / 10) will the the row number