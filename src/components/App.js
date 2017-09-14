import React, { Component } from 'react';
import '../style/App.css';
import '../style/responsive.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="header">
          <h1>Pochette</h1>
        </header>
        <div className='content'>
          <div className="login-Et">
            <h3>Login</h3>
          </div>
          <br/>
          <input className='email' type='email' placeholder='Email'/>
          <br/>
          <input className='password' type='password' placeholder='Password'/>
          <br/>
          <div className="forgot-link">
            <a href="/">Forgot Password ?</a>
          </div>
          <br/>
          <button className='login-btn'>Login</button>
        </div>
      </section>
    );
  }
}

export default App;
