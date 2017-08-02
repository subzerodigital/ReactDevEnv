import {combineReducers} from 'redux';
import coursesReducers from './courseReducers';

const rootReducer = combineReducers({
	courses: coursesReducers
});

export default rootReducer;
