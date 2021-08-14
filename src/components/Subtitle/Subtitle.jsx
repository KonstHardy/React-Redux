import styles from './Subtitle.module.css';

export default function Subtitle(props) {
  const { message } = props;

  return <h2 className={styles.root}>{message}</h2>;
}
