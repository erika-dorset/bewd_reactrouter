import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bulma/css/bulma.css'

class Home extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Home</h2>
        <img src="https://picsum.photos/200/300"/>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">About</h2>
        <img src="https://picsum.photos/300/300"/>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return(
      <div className="section">
        <h2 className="title">Contact Us</h2>
        <img src="https://picsum.photos/400/300"/>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div className="container is-widescreen">
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <ul className="navbar-start">
            <li className="navbar-item"><Link to="/">Home</Link></li>
            <li className="navbar-item"><Link to="/about">About</Link></li>
            <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
        </ul>
    </nav>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
