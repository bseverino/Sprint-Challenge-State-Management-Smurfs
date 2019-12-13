import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

import SmurfList from './smurfs/SmurfList';

import { fetchSmurfs } from '../store/actions';

const App = props => {
  const fetch = props.fetchSmurfs;

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
    </div>
  );  
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
