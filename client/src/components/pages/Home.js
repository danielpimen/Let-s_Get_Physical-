import React from 'react';
import {Link} from 'react-router-dom';

export const Home = props => (
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
              to="/userInput"
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
        <div id="main" className="col-lg-6">
          <h1 style={{textAlign: 'center'}}>Welcome</h1>
          <br />
          <p>
            Let's Get Physical is a fully customizable workout app that allows
            the user to input the amount of time they would like to work out,
            body parts the user would like to work out and the equipment the
            user has available. Workouts will provided that take into account
            the information the user entered.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="img-responsive"
            src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&h=350"
            style={{width: '100%'}}
          />
        </div>
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
);

export default Home;
