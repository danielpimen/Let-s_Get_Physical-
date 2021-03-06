import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import UserInput from './components/pages/UserInput';
import UserProfile from './components/pages/UserProfile';
import WorkoutSelector from './components/pages/WorkoutSelector';
import Workouts from './components/pages/Workouts';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userInput" component={UserInput} />
      <Route exact path="/userProfile" component={UserProfile} />
      <Route exact path="/workoutSelector" component={WorkoutSelector} />
      <Route exact path="/workouts" component={Workouts} />
    </div>
  </Router>
);

export default App;
