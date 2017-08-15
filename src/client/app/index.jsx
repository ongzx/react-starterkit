import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import styles from './style.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <Navbar />
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('app')
);