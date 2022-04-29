import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <h1>Welcome, Math Magicians!</h1>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;