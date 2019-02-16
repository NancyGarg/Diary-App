import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser,logout} from '../actions/userAction';

class Header extends Component {
	render(){
		return(<div>
      <nav className="navbar navbar-dark py-2 navbar-expand-md" style={{backgroundColor: 'rgb(89, 49, 14,0.8)'}}>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <Link to='/' className="navbar-brand" style={{fontSize:'1.5em'}}>Diary|2019</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
      { this.props.user ===null?
        <li className="nav-item">
        <Link className="nav-link" to='/login' style={{fontSize:'1.5em'}} exact="true">Login</Link>
        </li>:
        <li className="nav-item">
        <Link className="nav-link" to='/logout' style={{fontSize:'1.5em'}} onClick={()=>this.props.logout()} exact="true">Logout</Link>
        </li>
      }
      </ul>
      
      </div>
      </nav>
      </div>		)
    }



  }
  function mapStateToProps(state,ownProps){
   return {
    user:state.user
  }}
  export default connect(mapStateToProps,{getUser,logout})(Header);