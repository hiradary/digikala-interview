import Sidebar from "components/Sidebar";
import Chat from "components/Chat";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
