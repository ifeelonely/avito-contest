import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
