import { NavBar } from '../Navbar/NavBar';
import styles from './shell.module.css';

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.shell}>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
