import React from "react";
import Container from "../Container/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';



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
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorite">Favorite</a>
               
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
