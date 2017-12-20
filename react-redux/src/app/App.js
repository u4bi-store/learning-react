import React, { Component } from 'react';
import './App.css';

import * as Actions from '../providers/Actions';
import { connect } from 'react-redux';




const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps);

	return {
		value: state['A_TEAM']
	}
};




const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps',ownProps);

	return {
		onUp: () => {
			dispatch(Actions.Up('A_TEAM'));
		},
		onDown: () => {
			dispatch(Actions.Down('A_TEAM'));
		}
	}
};





class App extends Component {

    render() {

        const { onUp, onDown, value } = this.props;

        return (
            <div className='App'>
                
                <button onClick={ onUp }> + </button>
                <button onClick={ onDown }> - </button>
                
                <p> A_TEAM score : {value } </p>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/** connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 * 
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */