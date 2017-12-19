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

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');

        setTimeout(() => {
            
            this.setState({
                name : 'update movie app'
            });

            this.setState({
                movies : [
                    { title : '포레스트 검프', poster : 'http://www.hellhoundmusic.com/wp-content/uploads/2014/09/Forrest-Gump.jpg' },
                    { title : '이프 온리',    poster : 'https://media-cache.cinematerial.com/p/500x/w6zpxfct/if-only-south-korean-poster.jpg' },
                    { title : '원스',        poster : 'http://smugglersite.com/wp-content/uploads/2016/01/Article-Image-82.jpg' },
                    { title : '행복을찾아서',  poster : 'http://www.kayafm.co.za/wp-content/uploads/2016/09/pursuit-of-happyness-quote.png' },
                    { title : '킥에스', poster : 'https://www.bloggang.com/data/w/waveminator/picture/1271516014.jpg' }
                ]
            });

        }, 2000);
    }

    state = {
        name   : 'movie app'
    };

    _renderMovies() {
        const movies = this.state.movies.map( (v, index) => {
            return <Movie key={ index } title={ v.title } poster={ v.poster } />
        });

        return movies;
    }

    render() {
        console.log('dis render');
        return (
        <div className="App">
            
            <p> { this.state.name } </p>

            { this.state.movies ? this._renderMovies() : 'Loading' }

        </div>
        );
    }
}

export default App;
