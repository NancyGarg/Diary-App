import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateNote} from '../actions/notesAction';
import '../styles/app.css';



class NoteEdit extends Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.note.title,
      body:this.props.note.body,
      date:this.props.note.date

    }
    this.handleChange=this.handleChange.bind(this);
    
    this.handleSubmit=this.handleSubmit.bind(this);



  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });

  }

  handleSubmit(e){
    e.preventDefault();
    const note={
      title: this.state.title,
      body: this.state.body,
      uid:this.props.uid
    }
    this.props.updateNote(this.props.match.params.id, note);
    this.setState({
      body:'',
      title:''
    })
    this.props.history.push('/');
    
  }

  render() {
    return (
     <div className="container-fluid">
     <div className="row">
     <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2" >

     <div className="card my-4 shadow" >
     <i className="card-header">Created on:<i className="text-muted">  {this.state.date}</i></i>
     <div className="card-body">
     <form onSubmit={this.handleSubmit}>
     <div className="form-group" >
     <input onChange={this.handleChange} name="title" value={this.state.title} className="form-control my-4 no-border" type="text" placeholder="Title" ></input>
     </div>
     <div className="form-group" >
     <textarea style={{height:'21em' }} onChange={this.handleChange} value={this.state.body} name="body" className="form-control my-4 no-border" type="text" placeholder="Description.." > </textarea>
     </div>
     <div className="form-group" >
     <button  type="submit" className="btn btn-success btn-lg col-sm-12" type="text" >Update</button>
     </div>
     </form>
     </div>
     </div>
     
     </div>
     </div> 
     
     </div>
     );
  }
}


function mapStateToProps(state,ownProps){
  return {
    note:state.notes[ownProps.match.params.id],
    uid:state.user.uid
  }} 
  export default connect(mapStateToProps,{updateNote})(NoteEdit);
