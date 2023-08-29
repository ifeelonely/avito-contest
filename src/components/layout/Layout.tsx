import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import styles from './Layout.module.css';

const Layout = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
