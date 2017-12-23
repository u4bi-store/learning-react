import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './header/Header';
import Footer from './footer/Footer';

import Main from './main/Main';
import Two from './two/Two';
import Three from './three/Three';

import Four from './four/Four';

class App extends Component {
    render() {
        return (
        <Router basename='/' >
            <div className='App'>
                <Header />
                                
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route path='/two' component={ Two } />
                    <Route path='/three' component={ Three } />
                </Switch>

                <Four />

                <Footer />
            </div>
        </Router>
        );
    }
}

export default App;
