import React from 'react'
import styles from './Navbar.module.css';
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/ContextGlobalProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { contextValue } = useContext(ContextGlobal);
  const { toggleTheme } = contextValue;
  const { theme } = contextValue;

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header className={styles.stickyTop}>
      <nav
        className={`${styles.container} ${
          theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`}
        aria-label="Third navbar example"
      >
          <a className={`${styles.navbarBrand}, ${styles.container} ${styles.DH}`} href="/home">
              DH Odonto
          </a>
          <div
            className={styles.container}
            id="navbarsExample03"
          >
            <ul className={`${styles.container}`}>
              <li className={`nav-item`}>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item `}>
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" href="/favs">
                  Favorites
                </a>
              </li>
              <ul className={`nav-item`}>
                <button
                  className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
                  onClick={() => handleClick()}
                >
                  ☀ 🌙
                </button>
              </ul>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;