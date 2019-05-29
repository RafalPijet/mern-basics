import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = props => (
  <div>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-li']}><Link to='/' activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>Posts</Link></li>
      <li className={styles['nav-li']}><Link to='/home' activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>Home</Link></li>
      <li className={styles['nav-li']}><Link to='/about' activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>About</Link></li>
    </ul>
    {props.children}
  </div>
);

export default Navigation;
