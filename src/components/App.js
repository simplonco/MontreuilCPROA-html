import React, { Component } from 'react';
import '../style/App.css';
import '../style/responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pochette</h1>
        <div className='elements-Handler'>
        <h3>LOGIN</h3>
          <input className='email' type='email' placeholder='Email'/>
          <br/>
          <input className='password' type='password' placeholder='Password'/>
          <br/>
          <button className='login-btn'>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
