import React, {Component} from 'react';
import axios from 'axios';

export default class WorkoutSelector extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      bodyPart: '',
      equipment: '',
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    const selection = {};
    /* axios
      .post('/users/register', newUser)
      .then(res => this.setState({errors: true}))
      .catch(err => this.setState({errors: err.response.data}));
      */
  }
  render() {
    return (
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
                  href="user-input.html"
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
        <div className="container" style={{textAlign: 'center'}}>
          <div className="row">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle btn-lg"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Time Available<span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">5 minutes</a>
                </li>
                <li>
                  <a href="#">10 minutes</a>
                </li>
                <li>
                  <a href="#">15 minutes</a>
                </li>
                <li>
                  <a href="#">30 minutes</a>
                </li>
                <li>
                  <a href="#">45 minutes</a>
                </li>
                <li>
                  <a href="#">1 hour</a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle btn-lg"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Body Part(s)<span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Full Body</a>
                </li>
                <li>
                  <a href="#">Core</a>
                </li>
                <li>
                  <a href="#">Arms</a>
                </li>
                <li>
                  <a href="#">Legs</a>
                </li>
                <li>
                  <a href="#">Booty</a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle btn-lg"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Equipment<span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Shakeweight</a>
                </li>
                <li>
                  <a href="#">2 Shakeweights</a>
                </li>
                <li>
                  <a href="#">3 Shakeweights</a>
                </li>
                <li>
                  <a href="#">4 Shakeweights</a>
                </li>
                <li>
                  <a href="#">5 Shakeweights</a>
                </li>
                <li>
                  <a href="#">6 Shakeweights</a>
                </li>
              </ul>
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
  }
}
