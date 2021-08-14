import { useDispatch } from "react-redux";
import { postRemove } from "../../redux/actions/postsAction";

import styles from "./Post.module.css";

export default function Post(props) {
  const { post } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    const { id } = post;
    dispatch(postRemove(id));
  };

  return (
    <li className={styles.post__item}>
      <div className={styles.post__body}>
        <div className={styles.post__title}>
          <span className={styles.post__author}>{post.title}</span>
          <p className={styles.post__time}>{post.date}</p>
        </div>
        <p className={styles.post__desc}>{post.description}</p>
      </div>

      <div>
        <button
          className={styles.btn__remove}
          onClick={handleRemove}
          type="button"
        >
          <span className={styles.btn__line} />
          <span className={styles.btn__line} />
        </button>
      </div>
    </li>
  );
}
