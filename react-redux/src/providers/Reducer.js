import { SCORE_UP, SCORE_DOWN } from './Actions';

export default ( state, action) => {

    
    const { teamScores } = action;


    switch (action.type){
        case SCORE_UP:
            return {...state, [teamScores]: state[teamScores] + 1}
        case SCORE_DOWN:
            return {...state, [teamScores]: state[teamScores] - 1}
        default: return state;
    }


}