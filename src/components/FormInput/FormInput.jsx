import styles from './FormInput.module.css';

export default function FormInput(props) {
  return (
    <div>
      <input
        className={styles.form__input}
        type="text"
        autoComplete="off"
        {...props}
      />
    </div>
  );
}
