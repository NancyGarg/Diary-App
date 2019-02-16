import React, {Component} from 'react';
import {googleLogin,facebookLogin} from '../actions/userAction';
import {connect} from 'react-redux';
import '../styles/login.css';
import Typing from 'react-typing-animation';


class Login extends Component {
	componentWillMount(){
			if(this.props.user!==null){
				
				 this.props.history.push('/');
			}
		}
		componentWillReceiveProps(nextProps){
			if(nextProps.user!==null){
				nextProps.history.push('/');
			}
		}

		
	render(){
		

		return(
				<div className="container-fluid ">
				<div className="row text-center">
				<div className="col-12 jumbotron backg">
				<h1 className="text-white">
				<Typing loop={true}>
				<span>Write your mind..!!</span>
				<Typing.Delay ms={1000} />
				<Typing.Backspace count={50} />
				

				</Typing>
				</h1>
				</div> 
				</div>
				<div className="row text-center">
				<div className="col-sm-10 col-md-8 col-lg-7">
				
				<div className="login-box text-center">
			
				<h1>Use your favourite social media to continue..</h1>
				
				<button className="btn btn-danger btn-lg m-4 p-4" style={{width:'80%'}} onClick={this.props.googleLogin}>LogIn with Google</button>
				<button className="btn btn-primary btn-lg m-4 p-4" style={{width:'80%'}} onClick={this.props.facebookLogin}>LogIn with Facebook</button>
				<hr className="hr-style"/>
				</div>
				
				</div>
				
				
				
				</div>
				</div>
			);
	}



}
function mapStateToProps(state,ownProps){
	return {
		user:state.user
};
}
export default connect(mapStateToProps,{googleLogin,facebookLogin})(Login);














