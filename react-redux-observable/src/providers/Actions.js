export const GET_BOARDS         = '[Boards] GetBoards';
export const GET_BOARDS_SUCCESS = '[Boards] GetBoardsSuccess';

export const GetBoards = () => {
	return {
		type: GET_BOARDS
	}
}

export const GetBoardsSuccess = (boards) => {
	return {
		type: GET_BOARDS_SUCCESS,
		boards: boards
	}
}