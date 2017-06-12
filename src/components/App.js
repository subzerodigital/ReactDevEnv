import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<nav>header here</nav>
				{this.props.children}
			</div>
		);
	}
}

//console.log('haha');

App.propTypes = {
	children: PropTypes.any.isRequired
};

export default App;