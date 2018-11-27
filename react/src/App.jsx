import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/dashboard';
import AuthService from './component/AuthService/AuthService';
import withAuth from './component/AuthService/withAuth';
const Auth = new AuthService();

class App extends Component {
  
  constructor(props){
    super(props);
     this.state = {      fieldVal: "Parent Values"  }
    }


  // handleLogout(){
  //   Auth.logout()
  //   this.props.history.replace('/home');
  // }

  render() {
    return (
      <div className="App">

        {/* <div class="fixed-header">
         User ID : {this.props.user.username}  
          <button id="logout_button" type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>

        </div> */}



        < Dashboard/>
        
      </div>
    );
  }
}

export default withAuth(App);
