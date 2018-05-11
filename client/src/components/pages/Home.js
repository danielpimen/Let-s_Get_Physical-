import React from 'react';
import {Link} from 'react-router-dom';

export const Home = props => (
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
              className="btn btn-danger"
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
              to="/userInput"
              type="button"
              className=" btn navbar-btn btn-danger"
              id="navbar-link"
            >
              {' '}
              Register{' '}
            </Link>
       
        </ul>
      </div>
    </nav>
    <div className="container">
      <div className="row text-center">
        <div id="main" className="col">
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
        <div className="col">
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
        Project Awesome &copy; 2018
      </div>
    </div>
  </div>
);

export default Home;
