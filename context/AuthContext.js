import {createContext, useState, useEffect} from 'react';
import {useRouter} from 'next/router';
const AuthContext = createContext();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useState(false);

  const [tempUser, setTempUser] = useState({
    email: '',
  });

  const router = useRouter();

  // register
  const register = async (user) => {
    try {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setTempUser(data);
        console.log(tempUser);
      }
      console.log(tempUser);

      if (res.status === 400) alert('User already exists!');
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const login = async (user) => {
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.username);
        setAuth(true);
        router.push('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // logout
  const logout = async () => {
    setUser(null);
    console.log(user);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/logout');
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        user,
        tempUser,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
