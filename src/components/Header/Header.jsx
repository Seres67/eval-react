import React, { useContext } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { MessageContext } from "../../context/MessageContext/MessageContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Header = () => {
  const authService = useContext(AuthContext);
  const { showMessage } = useContext(MessageContext);

  return (
    <header>
      <nav>
        <div>
          <img src="src/assets/logo.png" className={styles.logo} />
        </div>
        <ul className={styles["nav-links"]}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to={"/"}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to={"/movies"}
            >
              Films
            </NavLink>
          </li>
          {authService.isAuthenticated() && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to={"/add-movie"}
              >
                Ajouter
              </NavLink>
            </li>
          )}
          {!authService.isAuthenticated() && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to={"/login"}
              >
                Connexion
              </NavLink>
            </li>
          )}
          {!authService.isAuthenticated() && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to={"/register"}
              >
                Inscription
              </NavLink>
            </li>
          )}
          {authService.isAuthenticated() && (
            <li>
              <NavLink
                onClick={() => {
                  authService.logout();
                  showMessage("success", "Logged out successfully");
                }}
                className={styles.navLink}
                to={"/"}
              >
                Déconnexion
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
