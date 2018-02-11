import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom'

import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
      <div className="App">
			<NavBar/>

		<div>
		<Route path='/contact' component={Contact} />
		<Route path='/skills' component={Skills} />
		<Route path='/projects' component={Projects} />
		<Route exact path='/' component={Home} />
		</div>

		{/* Footer */}
		<div class="container footer">
			<span id="footerText">Copyright &copy; 2018 Simon Lieng</span>
		</div>
      </div>
		</Router>
    );
  }
}

class NavBar extends React.Component {
	render() {
		return(
		<nav className="navbar navbar-light bg-faded">
		<NavLink className="navbar-brand" to="/"><span id="brandText">Simon Lieng</span></NavLink>
		<ul className="nav navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/" activeClassName='active'><span className="navText">Home</span></NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/projects" activeClassName='active'><span className="navText">Projects</span></NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/skills" activeClassName='active'><span className="navText">Skills</span></NavLink>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="http://www.github.com/SLieng"><span className="navText">Github</span></a>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/contact" activeClassName='active'><span className="navText">Contact</span></NavLink>
			</li>
		</ul>
			{/*<form className="form-inline pull-xs-right">
			<input className="form-control" type="text" placeholder="Search"/>
			<button className="btn btn-primary" type="submit">Search</button>
		</form>*/}
	</nav>
		);
	}
}


class Home extends React.Component {
	render() {
		return (
		<div className="container main">
					<h1>Hello, I'm Simon!</h1>
		</div>
		);
	}
}

class Projects extends React.Component {
	render() {
		return (
		<div class="container main">
				<h1>Projects</h1>
				<div class="project">
					<h2> zTermite </h2>
				<p>Terminal emulator made in C++. Designed to be minimalistic.</p>
				</div>
				<div class="project">
					<h2> Optimized Sensor </h2>
					<p> Embedded software made in C, designed with readability and portability in mind.</p>
				</div>
				<div class="project">
					<h2> Pong with Machine Learning Integration</h2>
					<p>Designed as a web app with easy integration to test machine learning algorithms. 
			Uses client-side javascript, HTML/CSS and backend python with Flask.</p>
				</div>
		</div>
		);
	}
}

class Skills extends React.Component {
	render() {
		return (
		<div class="container main">
				<h1>Skills</h1>
				<ul>
			<li>
			Data Analysis. Data Visualisation. Machine Learning. Python Data Stack (Numpy, Pandas, Matplotlib, Scikit-learn, Tensorflow). Web Scraping. MySQL/SQL.
			</li>
			<li>
			HTML, CSS, JavaScript, Node.js, React.js, RESTful API, JEST
			</li>
			<li>
			C/C++
			</li>
			<li>
			Unix/Linux Environment - Vim, Bash, Git, Command Line Tools (grep, sed, ... ), Workflow Optimisation (Dotfiles)
			</li>
			</ul>

		</div>
		);
	}
}

class Contact extends React.Component {
	render() {
		return (
		<div class="container main">
			<div id="contactInfoWrapper"> Contact me at my email address:
			<div id="displayEmail">simon@simonlieng.com</div> </div>
				
			{/*
				<form id='contactForm'>
				<input type='text' placeholder='Name'/>
				<input type='text' placeholder='Email'/>
				<textarea placeholder='Message'/>
				<button>Submit</button>
				</form>
			*/}
				
		</div>
		);
	}
}

export default App;
