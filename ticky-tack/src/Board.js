//Here I'm going to piece together the board which is made up a bunch of squares
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Square from './Square'

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null), //Note: This builds a new array with 9 spot and fill makes all 9 spots say null. This will be the initial value
      xIsNext: true,
    }
  }

  buttonClick = (buttNum) => {
    const boxes = this.state.squares.slice();
    if (checkWin(boxes) || boxes[buttNum]){
      return;
    }
    boxes[buttNum] = this.state.xIsNext ? 'X':'O';
    this.setState({
      squares: boxes,
      xIsNext: !this.state.xIsNext,
    })
  } 

	selection(squareNum){
		return <Square 
              value={this.state.squares[squareNum]} 
              onClick={() => this.buttonClick(squareNum)}
              />
	}


  render() {

    const whoWon = checkWin(this.state.squares)

    let whosUp;

    if(whoWon){
      whosUp = 'Winner ' + whoWon
    } else {
      whosUp = 'Next player: ' + (this.state.xIsNext ? 'X':'O')//From tutorial but why?
    }


    return (

      <div>
      	<div className="status">{whosUp}</div>
      	<table className="board" align="center">
        <tr className="boardRow">
        	{this.selection(0)}
        	{this.selection(1)}
        	{this.selection(2)}
        </tr>
        <tr className="boardRow">
        	{this.selection(3)}
        	{this.selection(4)}
        	{this.selection(5)}
        </tr>
        <tr className="boardRow">
        	{this.selection(6)}
        	{this.selection(7)}
        	{this.selection(8)}
        </tr>
       </table>
      </div>
    );
  }
}

export default Board;

const winCon = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  ];

  let playsMade = 0

  const checkWin = (boxes) => {
  console.log (boxes)
  const tieMessage = 'Tie!'
  playsMade++;
  for(var x = 0; x < winCon.length; x++){
    if(boxes[winCon[x][0]] == 'X' && boxes[winCon[x][1]] == 'X' && boxes[winCon[x][2]] == 'X'){
      console.log('X wins!')
      return boxes[winCon[x][0]]
      //endGame();
    } else if (boxes[winCon[x][0]] == 'O' && boxes[winCon[x][1]] == 'O' && boxes[winCon[x][2]] == 'O'){
      console.log('O wins!')
      return boxes[winCon[x][0]]
      //endGame();
     } else if(playsMade >= 8){
       console.log('It is a tie')
       console.log(playsMade)
       return tieMessage
     } else {
      console.log('Keep playing!')
      console.log('Number of plays made: ', playsMade)
     }
  }
}