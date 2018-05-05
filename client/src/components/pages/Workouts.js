import React, {Component} from 'react';

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
                <a
                  href="home.html"
                  type="button"
                  className="btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  Home{' '}
                </a>
              </li>
              <li>
                <a
                  href="login.html"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  Login{' '}
                </a>
              </li>
              <li>
                <a
                  href="user.html"
                  type="button"
                  className=" btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  User{' '}
                </a>
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
              <img src="" className="img-responsive" alt="workouts" />
            </div>
            <div className="col-md-6">Saved Workouts</div>
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
