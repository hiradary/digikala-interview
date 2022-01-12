import Input from "components/Input";
import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actionBar}>
        <Input />
      </div>
    </div>
  );
};

export default Chat;
