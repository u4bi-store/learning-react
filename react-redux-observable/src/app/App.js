import React, { Component } from 'react';
import './App.css';

import * as Actions from '../providers/Actions';
import { connect } from 'react-redux';




const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps);

	return {
		boards : state.boards
	}
};




const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps',ownProps);

	return {
		onGetBoards: () => {
			dispatch(Actions.GetBoards());
		}
	}
};





class App extends Component {
    
    state = { };

    render() {

        const { onGetBoards, boards } = this.props;

        console.log(boards);

        return (
            <div className='App'>
                
                <button onClick={ onGetBoards }> api call </button>
                
                { boards.map(v => <Board key={ v.id } id={ v.id } title={ v.title } writer={ v.writer } content={ v.content } /> ) }

            </div>
        );
    }
}

function Board({ id, title, writer, content }){
    return (
        <div className='board'>
            <h2>{ title }</h2>
            <h4>{ id }</h4>
            <h4>{ writer }</h4>
            <h4>{ content }</h4>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/** connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * 
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */