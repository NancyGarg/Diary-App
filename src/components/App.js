import React, { Component } from 'react';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {getNotes,saveNotes,deleteNotes} from '../actions/notesAction';
import _ from 'lodash';
import {getUser} from '../actions/userAction';
import {Link} from 'react-router-dom';
import '../styles/app.css';




class App extends Component {
  constructor(props){
   
    super(props);
    this.state={
      title:'',
      body:'',
      date:new Date().toDateString()
      

    }
    this.handleChange=this.handleChange.bind(this);
    this.renderNotes=this.renderNotes.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);



  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });

  }
  renderNotes(){
    return _.map(this.props.notes,(note,key)=>{
      return(
        <div key={key} className="jumbotron py-4  jumbotron-fluid" style={{backgroundColor:'rgb(175, 153, 103)'}}  >
        <div className="" style={{backgroundColor:'black',opacity:'0.7'}}>
        <div className="container px-4 py-3" >
        <Link to={`/${key}`} style={{textDecoration:''}} className="hover" >
        <h2 className="text-font" style={{color: 'white',fontSize:'1.5em'}}>{note.title} </h2>
        </Link>
        
        <h5 className="font-italic text-secondary">{note.date}</h5>
        {note.uid===this.props.user.uid && (
          <div>
          <button onClick={()=> this.props.deleteNotes(key)} className="btn btn-info w-25">Delete</button>
          
          </div>
          
          )

        }

        </div>
        </div>
        </div>

        );
      });


    }
    handleSubmit(e){
      e.preventDefault();
      const note={
        title: this.state.title,
        body: this.state.body,
        date:this.state.date,
        uid:this.props.user.uid
      }
      this.props.saveNotes(note);
      this.setState({
        body:'',
        title:''
      })
    }

    render() {
     
      
      return (
      <div className="container-fluid">
      <div className="row ">
      <div className="col-10 offest-1 col-sm-2 offest-sm-0 text-center">
      <img src={this.props.user.photoURL} className="rounded-circle img-fluid p-4 d-none d-md-block" height="100px"></img>
      <h4 className="pt-3">Welcome back, {this.props.user.displayName}</h4>
      </div>
      <div className="col-sm-10 col-md-8" >

      <div className="card my-4 shadow">
      <h5 className="card-header">{this.state.date}</h5>
      <div className="card-body">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group" >
      <input onChange={this.handleChange} name="title" value={this.state.title} className="form-control no-border" type="text" placeholder="Title" ></input>
      </div>
      <div className="form-group" >
      <textarea style={{height:'200px' }} onChange={this.handleChange} value={this.state.body} name="body" className="form-control no-border" type="text" placeholder="Description.." > </textarea>
      </div>
      <div className="form-group" >
      <button  type="submit" className="btn btn-success btn-lg col-sm-12" type="text" >Save</button>
      </div>
      </form>
      </div>
      </div>
      {this.renderNotes()} 
      </div>
      </div> 
      
      </div>
      );
    }
  }


  function mapStateToProps(state,ownprops){
    return{
      notes:state.notes,
      user:state.user
    };
  }
  export default connect(mapStateToProps,{getNotes,saveNotes,deleteNotes,getUser})(App);









