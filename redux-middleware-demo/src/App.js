import React from 'react';
import { useDispatch } from 'react-redux';
import store from '../store/store';

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'ADD_DATA', payload: 'New Data' });
  };

  return (
    <div>
      <h1>Redux Middleware Demo</h1>
      <button onClick={handleClick}>Add Data</button>
    </div>
  );
};

export default App;
