import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/app.css';

class NoteDetail extends Component {
 render() {
 	const {note}=this.props;
 	
 	

   return (
    <div className="container-fluid mt-5 text-center">
    <div className="row">
    <div className="col-sm-10 col-md-8 offset-md-2 col-lg-6 offset-lg-3 offset-sm-1 " >

    <div className="card my-4">
    <h5 className="card-header text-left " style={{backgroundColor:'rgb(175, 153, 103)'}}>Created on:<i className="text-dark">  {note.date}</i></h5>
    <div className="card-body">
    <h2 className="card-title text-left text-font">{note.title}</h2>
    <p className="card-text text-left" style={{fontSize:'1.2em'}}>{note.body}</p>

    
    <button className="btn btn-info w-25 text-light"><Link className="text-light" to={`/${this.props.match.params.id}/edit`} >
    Update</Link></button>


    
    </div>
    </div>
    
    </div>
    </div> 
    
    <Link to='/' className="pt-5" style={{fontSize:'2em',color:'black'}} >Back</Link>
    </div>

    )
  }
}

function mapStateToProps(state,ownProps){
	return {
		note:state.notes[ownProps.match.params.id],
		noteid:ownProps.match.params.id,
		uid:state.user.id
  }} 
  
  export default connect(mapStateToProps)(NoteDetail);




  