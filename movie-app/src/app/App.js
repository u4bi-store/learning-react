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

        fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));

    }

    _renderMovies() {
        const movies = this.state.movies.map( (v, index) => {
            return <Movie key={ index } title={ v.title } poster={ v.poster } />
        });

        return movies;
    }

    render() {
        console.log('did render');
        return (
        <div className="App">
        
            { this.state.movies ? this._renderMovies() : 'Loading' }

        </div>
        );
    }
}

export default App;
