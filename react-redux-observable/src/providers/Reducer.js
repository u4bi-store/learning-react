import { GET_BOARDS, GET_BOARDS_SUCCESS } from './Actions';

const initialState = {
    pending: false,
    boards : []
};


const newState = (state, newData) => Object.assign({}, state, newData);


export default (state = initialState, action) => {
    console.log('action', action);

    switch (action.type) {
        case GET_BOARDS:
            return newState(state, { pending: true });
        case GET_BOARDS_SUCCESS:
            return newState(state, { pending: false, boards : action.boards });
        default : return state;
    }
};