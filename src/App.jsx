import styles from "./App.module.css";

import logo from "./img/logo.png";
import FormPost from "./components/FormPost/FormPost";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>
        <h1 className={styles.title}>react-redux__comments-app</h1>
        <img className={styles.logo} src={logo} alt="React logo" />
        <FormPost />
        <Posts />
      </div>
    </div>
  );
}

export default App;
