import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'link active-link' : 'link';
const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <NavLink to="/" className={linkClasses}>
          Games List
        </NavLink>
        <NavLink to="/game" className={linkClasses}>
          Game
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
