export const SCORE_UP   = '[TeamScore] Up';
export const SCORE_DOWN = '[TeamScore] Down';

export const Up = (teamScores) => {
	return {
		type: SCORE_UP,
		teamScores: teamScores
	}
}

export const Down = (teamScores) => {
	return {
		type: SCORE_DOWN,
		teamScores: teamScores
	}
}