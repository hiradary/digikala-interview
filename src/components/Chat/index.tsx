import { Reoverlay } from "reoverlay";
import { Send as SendIcon } from "react-feather";

import { useAppSelector } from "hooks";
import Input from "components/Input";
import Message from "./Message";
import styles from "./Chat.module.scss";

const Chat = () => {
  const activeChat = useAppSelector((state) => state.app.activeChat);

  const handleUserProfileClick = () => {
    if (!activeChat) return;
    const { avatar, fullname, username, id } = activeChat;

    Reoverlay.showModal("UserProfileModal", {
      id,
      avatar,
      fullname,
      username,
      onMessageBtnClicked: () => {
        Reoverlay.hideModal();
      },
    });
  };

  return (
    <div className={styles.container}>
      {activeChat ? (
        <>
          <header className={styles.header} onClick={handleUserProfileClick}>
            <div className={styles.profileImageContainer}>
              <img alt="Avatar" src={activeChat.avatar} />
            </div>

            <div className={styles.userCaption}>
              <h3 className={styles.title}>{activeChat.fullname}</h3>
              <span className={styles.subtitle}>last seen recently</span>
            </div>
          </header>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              {activeChat.chat.map((item) => {
                const isMine = activeChat.id === item.createdBy;

                return (
                  <Message
                    key={item.id}
                    isMine={isMine}
                    data={item}
                    createdAt="7:30 PM"
                  />
                );
              })}
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
        </>
      ) : null}
    </div>
  );
};

export default Chat;
