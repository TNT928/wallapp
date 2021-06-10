import {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Wallpost.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function WallPost({fetchPosts}) {
  const {user} = useContext(AuthContext);


    const author = user.username;
    console.log(author);
  

  const [post, setPosts] = useState({body: '', author: author});

  const onChange = (e) => {
    setPosts({...post, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:4000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      fetchPosts();
      toast.success('New post added!')
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    <div className={styles.container}>
     <ToastContainer/>
      <form action="submit" onSubmit={handleSubmit}>
        <textarea onChange={onChange} name="body"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
