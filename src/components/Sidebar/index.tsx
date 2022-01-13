import { useAppSelector, useAppDispatch } from "hooks";

import UserItem from "components/UserItem";
import SidebarHeader from "./SidebarHeader";
import styles from "./Sidebar.module.scss";
import { setActiveChat } from "store";

const Sidebar = () => {
  const chats = useAppSelector((state) => state.app.chats);
  const activeChat = useAppSelector((state) => state.app.activeChat);
  const dispatch = useAppDispatch();

  const handleChatClick = (id: string) => {
    const activeChat = chats.find((item) => item.id === id);

    dispatch(setActiveChat(activeChat));
  };

  return (
    <div className={styles.container}>
      <SidebarHeader />
      <ul className={styles.chatList}>
        {chats.map((item) => {
          const lastChat = item.chat[0] || null;
          return (
            <UserItem
              type="chat"
              isActive={activeChat ? activeChat.id === item.id : false}
              key={item.id}
              data={lastChat}
              onClick={() => handleChatClick(item.id)}
              {...item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
