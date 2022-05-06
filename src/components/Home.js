/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
        <div className={styles.home}>
            <h4> Welcome to our page</h4>
            <p>
                "Do not worry about your problems in mathematics. I assure you, my problems with mathematics are much greater than yours. God does not care about our mathematical difficulties. He integrates empirically".
                Albert Einstein
            </p>
        </div>
  );
}

export default Home;