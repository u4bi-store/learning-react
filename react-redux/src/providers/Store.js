import { createStore } from 'redux';
import Reducer from './Reducer';

const initialState = {
	'A_TEAM' : 10,
	'B_TEAM' : 20,
	'C_TEAM' : 30
}


const store = createStore(Reducer, initialState);


export default store;