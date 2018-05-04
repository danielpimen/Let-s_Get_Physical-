import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" style={{textAlign: 'center'}}>
                  <strong>Let's Get Physical!</strong>
                </a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link
                    to="/"
                    type="button"
                    className="btn navbar-btn btn-danger"
                    id="navbar-link"
                  >
                    {' '}
                    Home{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    type="button"
                    className=" btn navbar-btn btn-danger"
                    id="navbar-link"
                  >
                    {' '}
                    Login{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/UserProfile"
                    type="button"
                    className=" btn navbar-btn btn-danger"
                    id="navbar-link"
                  >
                    {' '}
                    User{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div id="main" className="col-lg-12">
              {/* <h4 style="text-align: center"></h4> */}
              <br />
              <p>
                Let's Get Physical is a fully customizable workout app that
                allows the user to input the amount of time they would like to
                work out, body parts the user would like to work out and the
                equipment the user has available. Workouts will provided that
                take into account the information the user entered.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              style={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'gray',
                width: '100%',
                position: 'fixed',
                left: 0,
                bottom: 0,
                paddingTop: '25px',
                paddingBottom: '25px',
              }}
            >
              Project Awesome &copy; 2018
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
