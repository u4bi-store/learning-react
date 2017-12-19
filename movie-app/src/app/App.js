import React, { Component } from 'react';
import './App.css';

import Movie from './movie/Movie';

const movieTitles = [
    '영화1',
    '영화2',
    '영화3',
    '영화4'
];

const movieImages = [
    'http://www.hellhoundmusic.com/wp-content/uploads/2014/09/Forrest-Gump.jpg',
    'https://media-cache.cinematerial.com/p/500x/w6zpxfct/if-only-south-korean-poster.jpg',
    'http://smugglersite.com/wp-content/uploads/2016/01/Article-Image-82.jpg',
    'http://www.kayafm.co.za/wp-content/uploads/2016/09/pursuit-of-happyness-quote.png'
];

class App extends Component {
render() {
    return (
    <div className="App">
        <Movie title={ movieTitles[0] } poster={ movieImages[0] } />
        <Movie title={ movieTitles[1] } poster={ movieImages[1] } />
        <Movie title={ movieTitles[2] } poster={ movieImages[2] } />
        <Movie title={ movieTitles[3] } poster={ movieImages[3] } />
    </div>
    );
}
}

export default App;
