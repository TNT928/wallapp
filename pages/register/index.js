import {useContext, useState} from 'react';
import Layout from '../../components/Layout';
import AuthContext from '../../context/AuthContext';
import styles from '../../styles/Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Register() {
  const {register} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({username, password, email});
    toast.success('Registration compelte, please check your email to verify!')
  };

  return (
    <Layout>
    <ToastContainer/>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input className={styles.button} type="submit" value="Register" />
        </form>
      </div>
    </Layout>
  );
}
