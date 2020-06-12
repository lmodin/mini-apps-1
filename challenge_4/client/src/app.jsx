import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Board from './components/board.jsx'


class GameBoard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      playerRed: true
    }
    this.currentPlayer = this.currentPlayer.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
  }

  currentPlayer () {
    if (this.state.playerRed) {
      return 'RED';
    } else {
      return 'BLUE';
    }
  }
  changePlayer() {
    //console.log(this)
    this.setState(state => ({
      playerRed: !state.playerRed
    }))
  }
  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        <p className="whoseTurn">It's your turn, {this.currentPlayer()}!</p>
        <Board
          currentPlayer={this.state.currentPlayer}
          changePlayer={this.changePlayer}
          currentPlayer={this.currentPlayer}/>
      </div>
    )
  }
}


const element = <GameBoard />
ReactDOM.render(element, document.getElementById('root'));

