import classNames from "classnames";

import styles from "./Message.module.scss";

interface MessageData {
  id: string;
  message: string;
  reply: null | {
    fullname: string;
    message: string;
  };
}

interface Props {
  data: MessageData;
  isMine: boolean;
  createdAt: string;
}

const Message = ({ data, isMine, createdAt }: Props) => {
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
                {reply.fullname}
              </span>
              <span className={styles.replyMessage} dir="auto">
                {reply.message}
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

export default Message;
