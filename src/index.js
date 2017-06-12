/**
 * Created by pengchengcao on 10/06/2017.
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

//import 'bootstrap';

render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('app')
);



