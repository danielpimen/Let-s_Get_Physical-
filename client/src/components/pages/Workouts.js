import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Workout extends Component {
  constructor() {
    super();
    axios
      .get('/profile/test')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                <strong>Let's Get Physical</strong>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              
                <Link
                  to="/"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  Home{' '}
                </Link>
              
              
                <Link
                  to="/login"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  Login{' '}
                </Link>
           

                <Link
                  to="/UserProfile"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  User{' '}
                </Link>
      
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
              backgroundColor: '#343a40',
              color: 'white',
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
