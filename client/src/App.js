import React from 'react'
import './App.css'
import LifeCycleEx from './R007_LifeCycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifeCycleEx 
      prop_value = 'FromApp.js'></LifeCycleEx>
    </div>
  );
}

export default App;
