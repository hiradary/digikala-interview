import SidebarChatItem from "./SidebarChatItem";
import SidebarHeader from "./SidebarHeader";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SidebarHeader />
      <ul className={styles.chatList}>
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
        <SidebarChatItem />
      </ul>
    </div>
  );
};

export default Sidebar;
