import React from "react";
// import {connect} from "react-redux";

class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    let username = this.refs["username"].value;
    let password = this.refs["password"].value;

    let info = {
      username,
      password
    }
    
    console.log(info);
    //this.props.submitProblem(info)
  }

  render() {
    return (
      <div>
        <div className="login-wr">
          <h4>Login</h4>
          <form className="login-form">

            <div class="login-row">
              <input ref="username" type="text" placeholder="Username" />
            </div>

            <div class="login-row">
              <textarea ref="password" placeholder="Password"></textarea>
            </div>

            <span>
              <button onClick={(e) => this.handleSubmit(e)} >
                Login
              </button>
            </span>

          </form>
        </div>
      </div>
    );
  }
}

export default Login;
