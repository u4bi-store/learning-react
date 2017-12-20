import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './Reducer';
import { getBoards$ } from './Epics';


const epicMiddleware = createEpicMiddleware(getBoards$);


const store = createStore(reducer, applyMiddleware(epicMiddleware));


export default store;