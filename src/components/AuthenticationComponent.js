import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



class AuthenticationComponent extends Component {
	componentDidUpdate(){
		const {userloading,user}=this.props;
		if(userloading===false && !user){
			this.props.history.push('/login');
		}
	}

	render(){
		const {userloading,children,user}=this.props;

		return (userloading===false && user)? <div>{children}</div>:null;
	}
}
function mapStateToProps(state,ownProps){
	return {
		user:state.user,
		userloading:state.loading.user
	}}
	export default withRouter(connect(mapStateToProps)(AuthenticationComponent));