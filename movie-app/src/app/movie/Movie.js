import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
        <div className='Movie'>
            <MoviePoster />
            <h1>{ this.props.title }</h1>
        </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
        <img src='https://avatars0.githubusercontent.com/u/21367010?s=460&v=4'/>
        );
    }
}

export default Movie;