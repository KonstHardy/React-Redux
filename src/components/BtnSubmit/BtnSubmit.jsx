import styles from './BtnSubmit.module.css';

export default function BtnSubmit(props) {
  const { btnText } = props;

  return (
    <button className={styles.root} type="submit">
      {btnText}
    </button>
  );
}
