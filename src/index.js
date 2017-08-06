/**
 * Created by pengchengcao on 10/06/2017.
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configStore from './store/configStore';
import {Provider} from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

//const store = configStore({courses: [{title: 'shit'}, {title: 'shit2'}]});
const store = configStore({
	courses: [{title: 'shit'}, {title: 'shit2'}],
	users: []
});

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);



