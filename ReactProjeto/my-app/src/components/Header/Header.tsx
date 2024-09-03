import React from 'react';
import styles from './Header.module.css';
import scssStyles from './Header.module.scss';

function Header(){

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Title test react module css</h1>
            <p className={scssStyles.description}>Example test paragraph</p>
        </header>
    )
}

export default Header;