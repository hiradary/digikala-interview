import React from "react";
import { MessageCircle } from "react-feather";
import { ModalWrapper } from "reoverlay";

import { User } from "constants/index";
import styles from "./UserProfile.module.scss";

interface Props extends User {
  onMessageBtnClicked?: () => void;
}

const UserProfile: React.FC<Props> = ({
  avatar,
  fullname,
  username,
  onMessageBtnClicked,
}) => {
  return (
    <ModalWrapper contentContainerClassName={styles.container}>
      <div className={styles.profileImageContainer}>
        <img alt="Avatar" src={avatar} />
      </div>
      <h2 className={styles.fullname}>{fullname}</h2>
      <span className={styles.username}>@{username}</span>
      <button
        title="Message"
        className={styles.messageBtn}
        onClick={onMessageBtnClicked}
      >
        <MessageCircle className={styles.messageBtnIcon} />
        <span className={styles.messageBtnText}>Message</span>
      </button>
    </ModalWrapper>
  );
};

UserProfile.defaultProps = {
  onMessageBtnClicked: () => null,
};

export default UserProfile;
