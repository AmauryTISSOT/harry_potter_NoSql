import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h2>Harry Potter Character Data Analysis</h2>
            <nav className={styles.navBar}>
                <Link to="/">Accueil</Link>
                <Link to="/showAllCharacters">Afficher les personnages</Link>
            </nav>
        </div>
    );
};

export default Header;
