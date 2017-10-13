import { SET_COLOR } from '../actiontypes';

const INITIAL_STATE = {
	selectedColor: null
};

const settingsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_COLOR:
			return {
				...state,
			}



		default: return state;
	}
}

export default settingsReducer;