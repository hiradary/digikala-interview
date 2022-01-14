import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks";

import UserItem from "components/UserItem";
import SidebarHeader from "./SidebarHeader";
import styles from "./Sidebar.module.scss";
import { setActiveChat } from "store";

const Sidebar = () => {
  const allChats = useAppSelector((state) => state.app.chats);
  const activeChat = useAppSelector((state) => state.app.activeChat);

  const [inputText, setInputText] = useState("");
  const [chats, setChats] = useState(allChats);

  const dispatch = useAppDispatch();

  useEffect(() => {
    updateChats(inputText);
  }, [allChats]);

  const handleChatClick = (id: string) => {
    const activeChat = allChats.find((item) => item.id === id);

    dispatch(setActiveChat(activeChat));
  };

  const updateChats = (searchTerm: string) => {
    setChats(() => {
      return allChats.filter((item) =>
        item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const handleSearch = (searchTerm: string) => {
    setInputText(searchTerm);
    updateChats(searchTerm);
  };

  return (
    <div className={styles.container}>
      <SidebarHeader searchValue={inputText} onSearch={handleSearch} />
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
