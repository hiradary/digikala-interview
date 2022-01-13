import classNames from "classnames";

import { Message } from "constants/index";
import styles from "./Message.module.scss";

interface Props {
  data: Message;
  isMine: boolean;
  createdAt: string;
}

const MessageComp = ({ data, isMine, createdAt }: Props) => {
  const { id, message, reply } = data;

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.mine]: isMine,
        [styles.theirs]: !isMine,
      })}
    >
      <div className={styles.container}>
        {reply && (
          <div className={styles.replyContainer}>
            <div className={styles.replyBorder}></div>
            <div className={styles.replyContent}>
              <span className={styles.replyFullname} dir="auto">
                {""}
              </span>
              <span className={styles.replyMessage} dir="auto">
                {""}
              </span>
            </div>
          </div>
        )}
        <p>{message.trim()}</p>
        <span className={styles.time}>{createdAt}</span>
      </div>
    </div>
  );
};

export default MessageComp;
