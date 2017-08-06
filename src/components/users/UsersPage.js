import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from './../../actions/userActions';

class UsersPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			user: {
				name: ''
			}
		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onNameChange(event) {
		const user = this.state.user;
		user.name = event.target.value;
		this.setState({user});
	}

	onFormSubmit(event) {
		//console.log(this);
		//this.props.dispatch(userActions.createUser(this.state.user));
		this.props.createUser(this.state.user);
		this.setState({
			user:{name:''}
		})
	}

	render() {

		return (
			<div>
				<h1>User</h1>
				<h2>Add user {this.state.user.name}</h2>
				{
					this.props.users.map((user, index) => {
						return <div key={index}>{user.name}</div>
					})
				}
				<input type="text" onChange={this.onNameChange} value={this.state.user.name} name="userName"/>
				<input type="submit" onClick={this.onFormSubmit} value="Register User" name="registerName"/>
			</div>
		);

	}
}

//state - is the whole redux store
//ownProps is this.props
function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createUser: user => dispatch(userActions.createUser(user))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersPage);

