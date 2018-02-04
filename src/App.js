import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<nav className="navbar navbar-light bg-faded">
		<a className="navbar-brand" href="#">Simon Lieng</a>
		<ul className="nav navbar-nav">
			<li className="nav-item active">
				<a className="nav-link" href="">Home</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="projects">Projects</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="about.html">About</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="http://www.github.com/SLieng">Github</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="contact.html">Contact</a>
			</li>
		</ul>
		<form className="form-inline pull-xs-right">
			<input className="form-control" type="text" placeholder="Search"/>
			<button className="btn btn-primary" type="submit">Search</button>
		</form>
	</nav>

		<Router>
		<div>
		<Route path='/projects' component={Projects} />
		<Route exact path='/' component={Home} />
		</div>
		</Router>

		{/* Footer */}
		{/*<div class="container">
			<div class="row">
				<div class="col-lg-12">
		Simon Lieng 
		</div>
		</div>
		</div>*/}
      </div>
    );
  }
}

class Home extends React.Component {
	render() {
		return (
		<div class="container">
		<div class="row">
		<div class="col-lg-12">
		<h1>Hello, I'm Simon!</h1>
		</div>
		</div>
		</div>
		);
	}
}

class Projects extends React.Component {
	render() {
		return (
		<div class="container">
		<div class="row">
		<div class="col-lg-12">
		<h1>Below are some of my personal projects</h1>
		</div>
		</div>
		</div>
		);
	}
}

export default App;
