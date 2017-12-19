import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
    stateless functional component
        dumb component : not function render, not lifecycle
*/

function Movie({ title, poster }){
    return (
        <div className='Movie'>
            <MoviePoster poster={ poster }/>
            <h1>{ title }</h1>
        </div>
    );
}

function MoviePoster({ poster }){
    return (
        <img src={ poster } alt="Movie Poster"/>
    );
}

Movie.propTypes = {
    title  : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
};

export default Movie;