import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { GET_BOARDS, GetBoardsSuccess } from './Actions';


const apiCall = async () => {
    const response = await fetch('https://cdn.rawgit.com/u4bi/pure-redux-observable/master/model/data.json');
    const data = await response.json();
    return data;
};


function* getApiData(action) {
    const data = yield call(apiCall);
    yield put(GetBoardsSuccess(data.boards));
}


/* Allows concurrent fetches */
// export default function* Sagas() {
//     yield takeEvery(GET_BOARDS, getApiData);
// }


/* only the latest one will be run */
export default function* Sagas() {
    yield takeLatest(GET_BOARDS, getApiData);
}