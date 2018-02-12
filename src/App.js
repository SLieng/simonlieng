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
		<div className="container footer">
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
			<p>
			I'm a passionate and ambitious software developer currently living in London, UK. 
			Since graduating from University of Cambridge with a Mathematics Degree, I've been intensely learning and programming to become world class.
			I have been a tech enthusiast ever since I can remember myself.
			I possess diverse set of techincal skills, from back-end software development to data science skills and I always keep up with the latest and powerful technologies.
			</p>
			<div className="break"></div>
					<FullSkills/>
			<div id="contactInfoWrapper"> Contact me at my email address:
			<div id="displayEmail">simon@simonlieng.com</div> </div>
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
					<h2> Sensor with Task Scheduler </h2>
					<p> Embedded software made in C designed with readability and portability in mind.</p>
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
		<div className="container main">
			<FullSkills/>
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

class FullSkills extends React.Component {
	render() {
		return (
			<div>
				<h1>Skills</h1>
			<div className="skillSection">
			<h2>Data</h2>
			<svg>
			<rect y="20" width="300"></rect>
			<rect y="70" width="200"></rect>
			<rect y="120" width="250"></rect>
			<rect y="170" width="250"></rect>
			<rect y="220" width="300"></rect>
			<text x="10" y="35">Data Analysis</text>
			<text x="10" y="85">Machine Learning</text>
			<text x="10" y="135">Python Data Stack</text>
			<text x="10" y="185">Web Scraping</text>
			<text x="10" y="235">SQL/MySQL</text>
			<text x="10" y="155">(Pandas, Matplotlib, Scikit-learn, Tensorflow)</text>
			</svg>
			</div>

			<div className="skillSection">
			<h2>Back-End Development</h2>
			<svg>
			<rect y="20" width="200"></rect>
			<rect y="70" width="250"></rect>
			<rect y="120" width="300"></rect>
			<rect y="170" width="150"></rect>
			<text x="10" y="35">Node.js</text>
			<text x="10" y="85">C/C++</text>
			<text x="10" y="135">Python</text>
			<text x="10" y="185">REST Architecture</text>
			</svg>
			</div>

			<div className="skillSection">
			<h2>Front-End Web Development</h2>
			<svg>
			<rect y="20" width="300"></rect>
			<rect y="70" width="250"></rect>
			<rect y="120" width="300"></rect>
			<rect y="170" width="100"></rect>
			<text x="10" y="35">JavaScript</text>
			<text x="10" y="85">React</text>
			<text x="10" y="135">HTML5/CSS</text>
			<text x="10" y="185">JQuery</text>
			<text x="10" y="105">(including Redux)</text>
			</svg>
			</div>

			<div className="skillSection">
			<h2>Mathematics</h2>
			<svg>
			<rect y="20" width="250"></rect>
			<rect y="70" width="300"></rect>
			<rect y="120" width="200"></rect>
			<text x="10" y="35">Statistics</text>
			<text x="10" y="85">Algorithms</text>
			<text x="10" y="135">Optimisation</text>
			</svg>

			</div>
			<div className="skillSection">
			<h2>Miscellaneous</h2>
			<svg>
			<rect y="20" width="300"></rect>
			<rect y="70" width="200"></rect>
			<rect y="120" width="200"></rect>
			<rect y="170" width="300"></rect>
			<text x="10" y="35">Linux</text>
			<text x="10" y="85">Bash/Shell</text>
			<text x="10" y="135">Command Line Tools</text>
			<text x="10" y="185">Coding Speed</text>
			<text x="10" y="105">Scripting</text>
			{/* vim, workflow optimisation (dotfiles), git, command line tools i.e. grep, sed*/}
			</svg>
			</div>
			</div>
		);
	}
}

export default App;
