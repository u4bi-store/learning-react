import React, { Component } from 'react';
import './App.css';

import Movie from './movie/Movie';

// const movieTitles = [
//     '영화1',
//     '영화2',
//     '영화3',
//     '영화4'
// ];

// const movieImages = [
//     'http://www.hellhoundmusic.com/wp-content/uploads/2014/09/Forrest-Gump.jpg',
//     'https://media-cache.cinematerial.com/p/500x/w6zpxfct/if-only-south-korean-poster.jpg',
//     'http://smugglersite.com/wp-content/uploads/2016/01/Article-Image-82.jpg',
//     'http://www.kayafm.co.za/wp-content/uploads/2016/09/pursuit-of-happyness-quote.png'
// ];

const movies = [
    { title : '포레스트 검프', poster : 'http://www.hellhoundmusic.com/wp-content/uploads/2014/09/Forrest-Gump.jpg' },
    { title : '이프 온리',    poster : 'https://media-cache.cinematerial.com/p/500x/w6zpxfct/if-only-south-korean-poster.jpg' },
    { title : '원스',        poster : 'http://smugglersite.com/wp-content/uploads/2016/01/Article-Image-82.jpg' },
    { title : '행복을찾아서',  poster : 'http://www.kayafm.co.za/wp-content/uploads/2016/09/pursuit-of-happyness-quote.png' }
];

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
    }

    render() {
        console.log('dis render');
        return (
        <div className="App">
            
            { movies.map( (v, index) => {
                return <Movie key={ index } title={ v.title } poster={ v.poster } />
            })}

            {/* <Movie title={ movieTitles[0] } poster={ movieImages[0] } />
            <Movie title={ movieTitles[1] } poster={ movieImages[1] } />
            <Movie title={ movieTitles[2] } poster={ movieImages[2] } />
            <Movie title={ movieTitles[3] } poster={ movieImages[3] } /> */}
        </div>
        );
    }
}

export default App;
