import styles from "./SidebarChatItem.module.scss";

const SidebarChatItem = () => {
  return (
    <li className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.profileImageContainer}>
          <img
            alt="Profile"
            src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </div>
      </div>

      <div className={styles.userCaption}>
        <p className={styles.dialogTitle}>
          <span className={styles.userTitle}>Hirad</span>
          <span className={styles.dialogTitleDetails}>Tue</span>
        </p>
        <p className={styles.dialogSubtitle}>
          <span className={styles.userLastMessage}>Login code is 64231</span>
        </p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
