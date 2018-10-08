import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import News from './Components/News/News.jsx';
import Navbar from './Components/CustonNavBar/CustonNavBar.jsx';
import './App.css';

class App extends Component {
    render() {
        return ( 
          <Router>   
              <div>
                 <Navbar />
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/about' component={About} />
                 <Route exact path='/news' component={News} />
                 
              </div>
          </Router>
        );
    }
}

export default App;