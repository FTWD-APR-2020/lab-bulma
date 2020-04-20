import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropsExample from './components/PropsExample';

function App() {
  return (
    <div className="App">

      <Navbar />
      <PropsExample studentName="Hugo" teacherName="Juan" />

    </div>
  );
}

export default App;
