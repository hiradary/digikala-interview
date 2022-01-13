import { ModalWrapper, Reoverlay } from "reoverlay";

import { useAppSelector, useAppDispatch } from "hooks";
import { addToChatList, setActiveChat } from "store";
import { User } from "constants/index";
import UserItem from "components/UserItem";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  const contacts = useAppSelector((state) => state.app.contacts);
  const chats = useAppSelector((state) => state.app.chats);
  const dispatch = useAppDispatch();

  const updateActiveChat = (userId: string) => {
    const user = contacts.find((item) => item.id === userId);
    const userInChats = chats.find((item) => item.id === userId);

    const newChat = {
      ...user,
      chat: userInChats ? userInChats.chat : [],
    };

    if (!userInChats) {
      dispatch(addToChatList(newChat));
    }
    dispatch(setActiveChat(newChat));
  };

  const handleContactClick = (item: User) => {
    const { id, avatar, fullname, username } = item;

    Reoverlay.showModal("UserProfileModal", {
      id,
      avatar,
      fullname,
      username,
      onMessageBtnClicked: () => {
        updateActiveChat(id);
        Reoverlay.hideAll();
      },
    });
  };

  return (
    <ModalWrapper contentContainerClassName={styles.container}>
      <h1 className={styles.contactsTitle}>My Contacts</h1>
      {contacts.map((item) => {
        return (
          <UserItem
            type="contact"
            key={item.id}
            onClick={() => handleContactClick(item)}
            {...item}
          />
        );
      })}
    </ModalWrapper>
  );
};

export default Contacts;
