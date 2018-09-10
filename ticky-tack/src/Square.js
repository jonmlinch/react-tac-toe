//Here I'm building an individual square which I can then insert when needed
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Square = (props) => {
    return (
        <td onClick={props.onClick} className="square">{props.value}</td>
    );
}

export default Square;