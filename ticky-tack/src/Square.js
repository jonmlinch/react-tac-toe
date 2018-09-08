//Here I'm building an individual square which I can then insert when needed
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Square extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: null
		}
	}


  render() {
    return (
        <td onClick={this.props.onClick} className="square">{this.props.value}</td>
    );
  }
}

export default Square;