import {useState, useContext, useEffect} from 'react';
import styles from '../styles/Post.module.css';

export default function Post({fetchPosts, posts}) {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h1>{post.body}</h1>
          <h3>{post.author}</h3>
        </div>
      ))}
    </div>
  );
}
