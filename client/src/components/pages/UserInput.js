import React, { Component } from "react";

class UserInput extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{ textAlign: "center" }}>
                <strong>Let's Get Physical!</strong>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="home.html"
                  type="button"
                  className="btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a
                  href="login.html"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li>
                <a
                  href="user.html"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {" "}
                  User{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h4 style={{ textAlign: "center" }}>
          {" "}
          Please Enter Username, Password and Email to Create an Account
        </h4>
        <div className="container">
          <div className="row">
            <div id="main" className="col-lg-12">
              <div className="input-group" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="username"
                />
              </div>
              <br />
              <div className="input-group" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <br />
              <div className="input-group" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                />
              </div>
              <br />
              <div className="input-group" style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                  id="passwordconfirmation"
                />
              </div>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-danger btn-block" id="login">
            Submit
          </button>
        </div>
        <div className="row">
          <div
            className="col-lg-12"
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "gray",
              width: "100%",
              position: "fixed",
              left: 0,
              bottom: 0,
              paddingTop: "25px",
              paddingBottom: "25px"
            }}
          >
            Project Awesome &copy; 2018
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
