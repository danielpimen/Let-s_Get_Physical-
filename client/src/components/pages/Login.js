import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);

    axios.post('/users/login', userData).then(res => {
      const {token} = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      <Redirect to="/workoutselector" />;
    });
  }
  render() {
    const {from} = this.props.location.state || '/';
    const {errors} = this.state;
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
            <div className="login">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">
                      Sign in to see your profile
                    </p>
                    <form onSubmit={this.onSubmit}>
                      <input
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />

                      <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      <input
                        type="submit"
                        className="btn btn-info btn-block mt-4"
                      />
                    </form>
                    {errors && <Redirect to={from || '/workouts'} />}
                  </div>
                </div>
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
      </div>
    );
  }
}
export default Login;
