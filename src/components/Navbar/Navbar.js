import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles['nav-container']}>
    <h1 className={styles['nav-title']}>Bookstore CMS</h1>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-item']}>
        <Link to="/">Books</Link>
      </li>
      <li className={styles['nav-item-categories']}>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <div className={styles.avatar}><ion-icon name="person" /></div>
  </nav>
);

export default Navbar;
