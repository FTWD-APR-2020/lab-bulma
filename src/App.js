import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropsExample from './components/PropsExample';
import FormField from './components/FormField'
import Message from './components/Message'
function App() {
  return (
    <div className="App">

      <Navbar />
      <PropsExample studentName="Hugo" teacherName="Juan" />

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />


    </div>
  );
}

export default App;
