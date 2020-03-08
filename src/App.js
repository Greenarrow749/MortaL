import React from 'react';
import Header from './header'
import './App.css';
import content from './content';
import Sidebar from './sidebar';
import Footer from './footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Categories from './Categories';
import Contact from './Contact';
import About from './About';
import Discussion from './Discussion';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div id="section" class="box">
      <div id="content">
      <Route path='/' exact component={content}/>
      <Route path='/Contact' exact component={Contact}/>
      <Route path='/Categories' exact component={Categories}/>
      <Route path='/About' exact component={About}/>
      <Route path='/Discussion' exact component={Discussion}/>
      </div>
      <Sidebar/>
      </div>
      
      
      
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
