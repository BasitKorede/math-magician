/* eslint-disable no-unused-vars */
import './App.css';
import React, { Components } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  const styles = [
    {
      display: 'flex',
      justifyContent: 'space-between',
    },

    {
      margin: '20px',
    },

    {
      listStyle: 'none', display: 'flex',
    },

    {
      textDecoration: 'none', fontFamily: 'Franklin Gothic Medium', color: 'green',
    },
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    {
      fontFamily: 'Franklin Gothic Medium',
    },
  ];
  return (
    <>
      <Router>
        <div style={styles[1][4]}>
          <div style={styles[0]}>
            <h1 style={styles[5]}> Math Magicians</h1>
            <nav>
              <ul style={styles[2]}>
                <li style={styles[1]}>
                  <Link style={styles[3]} to="/">Home</Link>
                </li>
                <li style={styles[1]}>
                  <Link style={styles[3]} to="/calculator">Calculator</Link>
                </li>
                <li style={styles[1]}>
                  <Link style={styles[3]} to="/quotes">Quotes</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
          <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quotes />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <div>
          <p>
            Designed by
            <a style={styles[3]} target="_blank" href="https://github.com/rotimiazeez" rel="noreferrer">BAsit Korede</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;