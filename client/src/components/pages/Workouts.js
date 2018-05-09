import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

export default class Workout extends Component {
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
                  className=" btn navbar-btn btn-danger"
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
        <div className="container">
          <div className="row">
            <div id="main">
              <h1>Your Workouts</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-6">Workouts : </div>
            <div className="col-md-2" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12 some-foobar-element"
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
