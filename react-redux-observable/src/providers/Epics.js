import { Observable } from 'rxjs';
import { GET_BOARDS, GetBoardsSuccess } from './Actions';

export const getBoards$ = (epic) => epic.ofType(GET_BOARDS)
                                .switchMap((action) => Observable.ajax({
                                        url : 'https://cdn.rawgit.com/u4bi/pure-redux-observable/master/model/data.json',
                                        method : 'GET',
                                        crossDomain : true
                                    })
                                    .map(e => e.response.boards)
                                    .catch(err => console.error(err))
                                )
                                .map(v => GetBoardsSuccess(v));