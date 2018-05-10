import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {Redirect} from 'react-router';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
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
    axios
      .post('/users/register', newUser)
      .then(res => this.setState({errors: true}))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {from} = this.props.location.state || '/';
    const {errors} = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{textAlign: 'center', color: 'white'}}>
                <strong>Let's Get Physical!</strong>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              
                <Link
                  to="/"
                  type="button"
                  className="btn navbar-btn btn-danger"
                  id="navbar-link"
                >
                  {' '}
                  Home{' '}
                </Link>
            
              
                <Link
                  to="/Login"
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
        <h4 style={{textAlign: 'center'}}>
          {' '}
          Please Enter Name, Password and Email to Create an Account
        </h4>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div id="main" className="col-lg-12">
                <div className="input-group" style={{width: '100%'}}>
                  <input
                    type="text"
                    className={classnames('form-control', {
                      'is-invalid': errors.name,
                    })}
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <br />
                <div className="input-group" style={{width: '100%'}}>
                  <input
                    type="text"
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <br />
                <div className="input-group" style={{width: '100%'}}>
                  <input
                    type="text"
                    className={classnames('form-control', {
                      'is-invalid': errors.password,
                    })}
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <br />
                <div className="input-group" style={{width: '100%'}}>
                  <input
                    type="text"
                    className={classnames('form-control', {
                      'is-invalid': errors.password2,
                    })}
                    placeholder="Confirm Password"
                    id="passwordconfirmation"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange.bind(this)}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-danger btn-block"
              id="login"
              onSubmit={this.onSubmit}
            >
              Submit
            </button>
          </form>
          {errors && <Redirect to={from || '/login'} />}
        </div>
        <div className="row">
          <div
            className="col-lg-12"
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
  }
}

export default UserInput;
