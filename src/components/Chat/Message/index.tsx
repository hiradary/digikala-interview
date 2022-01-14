import React from "react";
import classNames from "classnames";

import { Message } from "constants/index";
import styles from "./Message.module.scss";

interface Props {
  data: Message;
  isMine: boolean;
  createdAt: string;
  reply?: null | {
    message?: string;
    fullname?: string;
  };
}

const MessageComp: React.FC<Props> = ({ data, isMine, createdAt, reply }) => {
  const { message } = data;

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

MessageComp.defaultProps = {
  reply: null,
};

export default MessageComp;
