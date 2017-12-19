import React, { Component } from 'react';
import './App.css';

import Movie from './movie/Movie';


/* smart component */

class App extends Component {

    /* Update Lifecycle

        componentWillReceiveProps() 1
        shouldComponentUpdate()     2 (old props !== props) === true ? 3
        componentWillUpdate()       3 use case : add spinner for loading
        render()                    4
        componentDidUpdate()        5  hide spinner
    */

    /* JSON API
        https://yts.am/api#list_movies
    */

    state = {};

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
        this._getMovies();
    }

    _renderMovies() {
        const movies = this.state.movies.map( movie => {
            return <Movie 
                key      = { movie.id }
                title    = { movie.title }
                poster   = { movie.medium_cover_image }
                genres   = { movie.genres }
                synopsis = { movie.synopsis }
            />
        });
        return movies;
    }

    async _getMovies() {
        const movies = await this._callApi();
        this.setState({ movies });
    }

    _callApi() {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then(resp => resp.json())
        .then(json => json.data.movies)
        .catch(err => console.error(err));
    }

    render() {
        console.log('did render');
        const { movies } = this.state;
        return (
        <div className={ movies ? 'App' : 'App--loading'}>
        
            { this.state.movies ? this._renderMovies() : 'Loading' }

        </div>
        );
    }
}

export default App;
