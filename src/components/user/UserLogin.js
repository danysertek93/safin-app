import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthService from './../../services/AuthService'
import {withRouter} from 'react-router-dom'

class UserLogin extends Component {
    state={mail:'',password:'',isChecked:false}
    async handleFromSubmit(event){
      event.preventDefault();
      const postData={
        email:this.state.mail,
        password:this.state.password
      }
      const response=await AuthService.doUserLogin(postData);
      if(response){
        AuthService.handleLoginSuccess(response,this.state.isChecked)
        this.props.history.push('/dashboard')
      }else{
        alert("Credenciales Invalidas")
      }
      
      
    }
    handleChecked(){
      this.setState({isChecked: !this.state.isChecked})
    }
  render() {
      const{mail,password,isChecked}=this.props 
    return (
      <div
        className="login-page"
        style={{ minheight: "514.3px" }}
        cz-shortcut-listen="true"
      >
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={event=>this.handleFromSubmit(event)}>
                <div className="input-group mb-3">
                  <input
                        className="form-control"
                        name="mail" 
                        type="mail" 
                        placeholder="Username" 
                        autoComplete="username"
                        value={mail}
                        onChange={event=>this.setState({mail:event.target.value})}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                        className="form-control"
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={event=>this.setState({password:event.target.value})}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"                         
                        checked={isChecked}
                        onChange={()=>this.handleChecked()} 
                        name="isChecked" 
                        custom id="inline-checkbox2" 
                        value="option2" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

UserLogin.propTypes = {};

export default withRouter(UserLogin);
