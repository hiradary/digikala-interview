import React from "react";
import classNames from "classnames";

import { Message, User } from "constants/index";
import styles from "./UserItem.module.scss";

interface Props extends User {
  type: "chat" | "contact";
  data?: Message;
  onClick?: () => void;
  isActive?: boolean;
}

const UserItem: React.FC<Props> = ({
  type,
  fullname,
  avatar,
  data,
  onClick,
  isActive,
}) => {
  return (
    <li
      className={classNames(styles.container, { [styles.active]: isActive })}
      onClick={onClick}
    >
      <div className={styles.avatar}>
        <div className={styles.profileImageContainer}>
          <img alt="Avatar" src={avatar} />
        </div>
      </div>

      <div className={styles.userCaption}>
        <p className={styles.dialogTitle}>
          <span className={styles.userTitle}>{fullname}</span>
          {type === "chat" && (
            <span className={styles.dialogTitleDetails}>Tue</span>
          )}
        </p>
        <p className={styles.dialogSubtitle}>
          <span className={styles.userLastMessage}>
            {type === "chat" ? data?.message || "" : "last seen recently"}
          </span>
        </p>
      </div>
    </li>
  );
};

UserItem.defaultProps = {
  onClick: () => null,
  isActive: false,
};

export default UserItem;
