import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

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

  testClickHandler = () => {
    console.log( "testing 123" );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{textAlign: 'center', color:'white'}}>
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
                  to="/userprofile"
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
        <div className="container" style={{textAlign: 'center'}}>
    
            
                <h4> Time Available: </h4>
      
              <div className="radio">
                
                  <label>
                  <input type="radio" className="optradio" />10 minutes</label>
              <label>
                <br />
                  <input type="radio" className="optradio" />20 minutes</label>
                <label>
                  <input type="radio" className="optradio" />30 minutes</label>
                
    
              </div>
    
          
          <br />
          <div className="row " className ="pull">
            <div className="radio">
                <h4>Body Part(s)</h4>
                <label>
                  <input type="radio" className="optradio" />Arms</label>
              <label>
                <br />
                  <input type="radio" className="optradio" />Legs</label>
                <label>
                  <input type="radio" className="optradio" />Abs</label>
                  <label>
                  <input type="radio" className="optradio" />Chest</label>
                  <label>
                  <input type="radio" className="optradio" />(Baby got) Back</label>
            </div>
          </div>
          <br />
          <div className="row " className ="pull">
            <div className="radio">
                <h4>Equipment(s)</h4>
                <label>
                  <input type="radio" className="optradio" />Barbell</label>
              <label>
                <br />
                  <input type="radio" className="optradio" />Dumbbell</label>
                <label>
                  <input type="radio" className="optradio" />Bench</label>
                  <label>
                  <input type="radio" className="optradio" />Kettlebell</label>
                  <label>
                  <input type="radio" className="optradio" />SZ Bar</label>
                  <label>
                  <input type="radio" className="optradio" />Gym Mat</label>
                  <label>
                  <input type="radio" className="optradio" />Pullup Bar</label>
            </div>
          </div>
          <br />
          <button type="button" onClick={this.testClickHandler} className="btn btn-danger btn-lg">Submit</button>

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
