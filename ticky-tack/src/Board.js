//Here I'm going to piece together the board which is made up a bunch of squares
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Square from './Square'

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null) //Note: This builds a new array with 9 spot and fill makes all 9 spots say null. This will be the initial value
    }
  }

  buttonClick = () => {
    console.log('clicked')
  } 

	selection(squareNum){
		return <Square 
              value={this.state.squares[squareNum]} 
              onClick={this.buttonClick}
              />
	}


  render() {

  	const whosup = 'Next player: X' //From tutorial but why?

    return (

      <div>
      	<div className="status">{whosup}</div>
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