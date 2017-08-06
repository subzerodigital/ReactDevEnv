import {combineReducers} from 'redux';
import coursesReducers from './courseReducers';
import userReducers from './userReducers';

/* here's how you know what states slides down to, state.courses state.users */

const rootReducer = combineReducers({
	courses: coursesReducers,
	users: userReducers
});

export default rootReducer;
