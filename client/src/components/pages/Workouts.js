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
              <a className="navbar-brand" style={{textAlign: 'center', color: 'white'  }}>
                <strong>Let's Get Physical!</strong>
              </a>
            </div>
            <ul className="navbar navbar-right">
              
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
          <div className="row" style={{textAlign:'center'}}>
          <div className="col">
            <div id="main">
              <h1>Your Workouts</h1>
            </div>
            </div>
          </div>
          <div className="row" style={{textAlign:'center'}}>
            <div className="col" />
            <div className="col">Workouts : </div>
            <div className="col" />
          </div>
        </div>
        <div className="row">
          <div
            className="col"
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
