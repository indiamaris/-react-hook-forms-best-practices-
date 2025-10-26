import { Link } from 'react-router';
import styles from './navbar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/simplest" className={styles.navLink}>
          Simplest Form
        </Link>
        <Link to="/cool" className={styles.navLink}>
          Cool Form
        </Link>
      </div>
    </nav>
  );
};
