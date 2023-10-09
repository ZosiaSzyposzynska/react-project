import React from "react";
import Container from "../Container/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';
import { NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className="navbar-content">
          <div className="navbar-left">
            <span className={styles.navbarIcon}>
              <a href="/"><FontAwesomeIcon icon={faBarsProgress} size="lg" /></a>
            </span>
          </div>
          <div className={styles.navbarRight}>
            <ul>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/favorite">Favorite</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
