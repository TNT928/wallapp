import {useContext, useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import AuthContext from '../../context/AuthContext';
import styles from '../../styles/Form.module.css';
import {useRouter, Router} from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Verify() {
  const {query} = useRouter();
  const token = query.index;
  const router = useRouter();

  const verifyEmail = async () => {
    try {
      const res = await fetch(`http://localhost:4000/verified/${token}`);
      const data = await res.json();

     router.push('/login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
    <ToastContainer/>
      <div className={styles.container}>
        <button className={styles.button} onClick={verifyEmail}>
          Click here to complete signup
        </button>
      </div>
    </Layout>
  );
}
