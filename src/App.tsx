import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState, Dispatch } from './store';
import Counter from './Counter';

const App: React.FC = () => {
  const { counter } = useSelector((state: IRootState) => state.counter);
  const dispatch = useDispatch<Dispatch>();
  const { increment } = dispatch.counter;
  const thunkDispatch = useDispatch<Dispatch>();
  const { asyncEffect } = thunkDispatch.counter;

  const isValid = async () => {
    const isTrue = await asyncEffect(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter  counter={counter}/>
        <a
          className="App-link"
          onClick={() => increment()}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
