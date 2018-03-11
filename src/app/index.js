import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Footer from '../shared/footer';
import Header from '../shared/header';
import Sidebar from '../shared/sidebar';

import Add from '../pages/add';
import Detail from '../pages/detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                <Sidebar/>
              </div>

              <div className="col-8">
                <Switch>
                  <Route exact path="/" component={null}/>
                  <Route path="/add" component={Add}/>
                  <Route path="/:id" component={Detail}/>
                </Switch>
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
