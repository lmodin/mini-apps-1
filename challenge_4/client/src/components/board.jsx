import React from 'react';



class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    var color = props.currentPlayer();
    //console.log(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleClick.bind(this)
  }
  handleClick(event) {
    //console.log(this.props.currentPlayer())
    this.props.changePlayer();
  }
  handleSelect(event) {
    this.props.changePlayer();
  }
  //this.props.currentPlayer = currentPlayer
  render() {
    return (
      <div>
        <button className={this.props.currentPlayer()}
          onClick={this.handleClick}>
          Current Player!
        </button>
        <div className="box"
          onClick={this.handleSelect}>C</div>
        <div className="box"
          onClick={this.handleSelect}>O</div>
        <div className="box"
          onClick={this.handleSelect}>N</div>
        <div className="box"
          onClick={this.handleSelect}>N</div>
      </div>
    )
  }
}

export default Board


var divvedBoard = (
  <div>
  <table>
    <thead>
      <tr>
        <th data-x="1"><h3>C</h3></th>
        <th data-x="2"><h3>O</h3></th>
        <th data-x="3"><h3>N</h3></th>
        <th data-x="4"><h3>N</h3></th>
        <th data-x="5"><h3>E</h3></th>
        <th data-x="6"><h3>C</h3></th>
        <th data-x="7"><h3>T</h3></th>
      </tr>
      <tr className="row Y6">
        <td data-x="1" data-y="6"></td>
        <td data-x="2" data-y="6"></td>
        <td data-x="3" data-y="6"></td>
        <td data-x="4" data-y="6"></td>
        <td data-x="5" data-y="6"></td>
        <td data-x="6" data-y="6"></td>
        <td data-x="7" data-y="6"></td>
      </tr>
      <tr className="row Y5">
        <td data-x="1" data-y="5"></td>
        <td data-x="2" data-y="5"></td>
        <td data-x="3" data-y="5"></td>
        <td data-x="4" data-y="5"></td>
        <td data-x="5" data-y="5"></td>
        <td data-x="6" data-y="5"></td>
        <td data-x="7" data-y="5"></td>
      </tr>
      <tr className="row Y4">
        <td data-x="1" data-y="4"></td>
        <td data-x="2" data-y="4"></td>
        <td data-x="3" data-y="4"></td>
        <td data-x="4" data-y="4"></td>
        <td data-x="5" data-y="4"></td>
        <td data-x="6" data-y="4"></td>
        <td data-x="7" data-y="4"></td>
      </tr>
      <tr className="row Y3">
        <td data-x="1" data-y="3"></td>
        <td data-x="2" data-y="3"></td>
        <td data-x="3" data-y="3"></td>
        <td data-x="4" data-y="3"></td>
        <td data-x="5" data-y="3"></td>
        <td data-x="6" data-y="3"></td>
        <td data-x="7" data-y="3"></td>
      </tr>
      <tr className="row Y2">
        <td data-x="1" data-y="2"></td>
        <td data-x="2" data-y="2"></td>
        <td data-x="3" data-y="2"></td>
        <td data-x="4" data-y="2"></td>
        <td data-x="5" data-y="2"></td>
        <td data-x="6" data-y="2"></td>
        <td data-x="7" data-y="2"></td>
      </tr>
      <tr className="row Y1">
        <td data-x="1" data-y="1"></td>
        <td data-x="2" data-y="1"></td>
        <td data-x="3" data-y="1"></td>
        <td data-x="4" data-y="1"></td>
        <td data-x="5" data-y="1"></td>
        <td data-x="6" data-y="1"></td>
        <td data-x="7" data-y="1"></td>
      </tr>
    </thead>
  </table>
</ div>
)