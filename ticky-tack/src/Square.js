//Here I'm building an individual square which I can then insert when needed
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Square extends Component {
	

  render() {
    return (
        <td onClick={this.buttonClick} className="square"></td>
    );
  }
}

export default Square;