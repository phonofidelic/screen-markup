import { combineReducers } from 'redux';
import colorPicker from './colorPicker';

const rootReducer = combineReducers({
	colorPicker: colorPicker
})

export default rootReducer;