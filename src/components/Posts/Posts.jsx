import { useSelector } from 'react-redux';

import styles from './Posts.module.css';

import Subtitle from '../Subtitle/Subtitle';
import Post from '../Post/Post';

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <Subtitle message="List of posts:" />
      <ul className={styles.postsList}>
        {posts.length ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p className={styles.emptyPostsList}>
            Here are no posts. Write the first post.
          </p>
        )}
      </ul>
    </>
  );
}
