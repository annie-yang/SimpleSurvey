import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // state for application
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      answers: {
        q1:'',
        q2:'',
        q3:'',
        q4:''
      },
      submitted: false
    }
  }

  handleNameSubmit(event){
    var name = this.refs.name.value;
    this.setState({
      name:name
    }, function(){
      console.log(this.state);
    });
    event.preventDefault();
  }

  render() {
    var user, questions;

    // if there is a name and questions weren't submitted yet
    if(this.state.name && this.state.submitted === false){
      user = <h2>
        Welcome {this.state.name}
      </h2>
    }else if(!this.state.name && this.state.submitted === false){ // if there is no name and questions weren't submitted yet
      user = <span>
        <h2>Please enter your name to begin the survey</h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Enter Name" ref="name"></input>
        </form>
      </span>;

      // set questions to empty string because don't want questions to show until name is filled out
      questions = '';
    }else if(this.state.submitted === true){ // questions have been submitted

    }

    return (
      <div className="App text-center">
        <div className="App-header">
          <h2>SimpleSurvey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
      </div>
    );
  }
}

export default App;
