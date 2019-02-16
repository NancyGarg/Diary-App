import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getNotes} from '../actions/notesAction';
import {getUser} from '../actions/userAction';
import '../styles/app.css';

class LoadingComponent extends Component {
	componentWillMount(){
		const {userloading,notesloading}=this.props;
		if(userloading===undefined){
			this.props.getUser();
		}
		if(notesloading===undefined){
			this.props.getNotes();
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.notesloading===-1 && nextProps.user!==null){
			this.props.getNotes();
		}
	}

	render(){
		const {userloading,notesloading,children}=this.props;

		if((!userloading && !notesloading) || this.props.user===null)
			{return<div>{children}</div>;
		
		
	}
	else { return(<div className="container text-center" style={{paddingTop:'30vh'}}>
		<div className="loader" ></div>
	<h1 className="text-center font-set" >Loading...</h1>
	</div>
	);
}
}



}
function mapStateToProps(state,ownProps){
	return {
		user:state.user,
		userloading:state.loading.user,
		notesloading:state.loading.notes
	}}
	export default withRouter(connect(mapStateToProps,{getNotes,getUser})(LoadingComponent));