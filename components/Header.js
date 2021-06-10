import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {useState} from 'react';

export default function Header() {
  const {user, logout, auth} = useContext(AuthContext);

  const guestLinks = (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1>Wall App</h1>
        </a>
      </Link>
      <ul>
        <Link href="/register">
          <a>Register</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </ul>
    </div>
  );

  const authLinks = (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1>Wall App</h1>
        </a>
      </Link>
      <ul>
        <Link href="#!">
          <a onClick={logout}>Logout</a>
        </Link>
      </ul>
    </div>
  );

  return <> {!auth ? guestLinks : authLinks}</>;
}
