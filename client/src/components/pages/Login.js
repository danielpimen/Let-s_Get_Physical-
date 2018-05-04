import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
  }
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
            <div className="login">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">
                      Sign in to see your profile
                    </p>
                    <form>
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
