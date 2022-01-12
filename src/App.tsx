import Sidebar from "components/Sidebar";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.chatContainer}></div>
      </div>
    </div>
  );
};

export default App;
