import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext, useState} from 'react';
import Layout from '../../components/Layout';
import AuthContext from '../../context/AuthContext';
import styles from '../../styles/Form.module.css';
import {useRouter} from 'next/router';


export default function Login() {
  const {login} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast('Success');
    login({username, password});
    
  };

 
   
  
  return (
    <Layout>
    <ToastContainer/>
 
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {' '}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className={styles.button} type="submit" value="Login" />
        </form>
      </div>
    </Layout>
  );
}
