import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                <strong>Let's Get Physical</strong>
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
                  to="/userProfile"
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
        <div className="container">
          <div className="row">
            <div id="main">
              <h1>User Profile</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://consequenceofsound.files.wordpress.com/2018/03/nicolas-cage-superman-teen-titans-animated.png?w=807"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6">Saved Workouts</div>
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
            Let's Get Physical &copy; 2018
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
