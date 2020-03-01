import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';
import HomePage from './pages/HomePage/HomePage'

const hats = (props) => (
	<div>
		{console.log(props)}
		<h1>HATS!</h1>
		<Link to="/about">About</Link>
		<button onClick={() => props.history.push('/topics')}>Topics</button>
	</div>
);

const sneakers = props => (
  <div>
    {console.log(props)}
    <h1>SNEAKERS!</h1>
    <Link to='/about'>About</Link>
    <button onClick={() => props.history.push('/topics')}>Topics</button>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={hats} />
        <Route path='/shop/sneakers' component={sneakers} />
      </Switch>
    </div>
  );
}

export default App;
