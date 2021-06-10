import Image from 'next/image';
import Layout from '../components/Layout';
import Post from '../components/Post';
import WallPost from '../components/WallPost';
import {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  const {auth} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {

    const res = await fetch('http://localhost:4000/posts');
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };

  return (
    <Layout>
      <div>
        <ToastContainer/>
        {auth && <WallPost fetchPosts={fetchPosts} />}

        <Post fetchPosts={fetchPosts} posts={posts} />
      </div>
    </Layout>
  );
}
