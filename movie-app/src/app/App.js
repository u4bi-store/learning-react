import React, { Component } from 'react';
import './App.css';

import Movie from './movie/Movie';

const movieTitles = [
    '영화1',
    '영화2',
    '영화3',
    '영화4'
];

class App extends Component {
render() {
    return (
    <div className="App">
        <Movie title={ movieTitles[0] }/>
        <Movie title={ movieTitles[1] }/>
        <Movie title={ movieTitles[2] }/>
        <Movie title={ movieTitles[3] }/>
    </div>
    );
}
}

export default App;
