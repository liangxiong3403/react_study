import React, { Component } from 'react'
import { createContext } from 'react';
import Counter from './Counter';

const ThemeContext = createContext('light');

function App() {
  return (
    <div className="App">
      <Counter />
    </div >
  );
}

export default App;
