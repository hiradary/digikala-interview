import { Send as SendIcon } from "react-feather";

import Input from "components/Input";
import Message from "./Message";
import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileImageContainer}>
          <img
            alt="Profile"
            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </div>

        <div className={styles.userCaption}>
          <h3 className={styles.title}>Darya</h3>
          <span className={styles.subtitle}>last seen recently</span>
        </div>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Message
            isMine={true}
            data={{
              id: "1",
              message: "Doing great! Thanks. How about you?",
              reply: {
                fullname: "Darya",
                message: "Hey, How're you doing?",
              },
            }}
            createdAt="7:30 PM"
          />
          <Message
            isMine={false}
            data={{
              id: "2",
              message: `Hey, How're you doing?`,
              reply: null,
            }}
            createdAt="7:30 PM"
          />
        </div>
      </div>
      <footer className={styles.actionBar}>
        <Input
          className={styles.inputContainer}
          placeholder="Message"
          type="normal"
        />
        <button title="Send" className={styles.button}>
          <SendIcon className={styles.sendIcon} />
        </button>
      </footer>
    </div>
  );
};

export default Chat;
