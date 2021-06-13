import {
  Link
} from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';

import styles from '../styles/pages/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header className="header">
        <SearchBox placeholder="Search book" />
      </header>

      <main className="main">

      </main>

      <footer className="footer">
      </footer>
    </div>
  );
}

export default Home;
