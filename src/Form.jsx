import React from "react";
import { Toast } from "react-bootstrap";
import reactDom from "react-dom";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      
      error: false,
      emailError: "",
      passwordError: "",
      confirmpasswordError: "",
     
    };

    this.handleInputchange = this.handleInputchange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmpassword=this.handleConfirmpassword.bind(this);
    
  }

  handleInputchange(event) {
    this.setState({ name: event.target.value });
    // let item1 = event.target.value;
    this.state.name.length > 15
      ? this.setState({ error: true })
      : this.setState({ error: false });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
    // let item2 = event.target.value;
    let regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!regEmail.test(this.state.email)) {
      this.setState({ emailError: "*invalid mail" });
    } else {
      this.setState({ emailError: "" });
    }
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
    let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (!regPassword.test(this.state.password)) {
      this.setState({ passwordError: "*invalid password" });
    } else {
      this.setState({ passwordError: "" });
    }
  }

  

  handleConfirmpassword(event) {
    this.setState({ confirmpassword: event.target.value });
    
    if (this.state.password!==event.target.value) {
      this.setState({
        confirmpasswordError: "*confirm password should be match with password"
      });
    }
     else {
      this.setState({ confirmpasswordError: "" });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

  };
 

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputchange}
          />{" "}
          <br />
          {this.state.error ? (
            <span class="name1">*name must be lessthan 15 charaters</span>
          ) : null}
          <br></br>
          <lable>Email: </lable>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />{" "}
          <br />
          {this.state.email ? (
            <span class="email1">{this.state.emailError}</span>
          ) : null}
          <br></br>
          <lable>Password: </lable>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <br />
          {this.state.passwordError ? (
            <span class="password1">*invalid password</span>
          ) : null}
          <br></br>
          <label>Confirm Password: </label>
          <input
            type="text"
            value={this.state.confirmpassword}
            onChange={this.handleConfirmpassword}
          />
          <br />
          {this.state.confirmpasswordError ?(
          <span class="con">*Confirmpassword should be match with password</span>) :null}
          <br/>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
