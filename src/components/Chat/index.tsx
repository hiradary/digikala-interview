import React, { useState } from "react";
import { Reoverlay } from "reoverlay";
import { Send as SendIcon } from "react-feather";
import { nanoid } from "nanoid";

import { useAppSelector, useAppDispatch } from "hooks";
import { sendMessage } from "store";
import { getRandomElement } from "utils";
import { SAMPLE_REPLIES } from "constants/index";
import Input from "components/Input";
import Message from "./Message";
import styles from "./Chat.module.scss";

const Chat = () => {
  const [inputText, setInputText] = useState("");

  const activeChat = useAppSelector((state) => state.app.activeChat);
  const me = useAppSelector((state) => state.app.me);
  const dispatch = useAppDispatch();

  const handleUserProfileClick = () => {
    if (!activeChat) return;
    const { avatar, fullname, username, id } = activeChat;

    Reoverlay.showModal("UserProfileModal", {
      id,
      avatar,
      fullname,
      username,
      onMessageBtnClicked: () => {
        Reoverlay.hideModal();
      },
    });
  };

  const sendAutomatedReply = (id: string) => {
    if (!activeChat) return;

    const newMessage = {
      id: nanoid(),
      message: getRandomElement(SAMPLE_REPLIES),
      createdBy: activeChat.id,
      reply: id,
    };

    const data = {
      message: newMessage,
      conversationId: activeChat.id,
    };

    dispatch(sendMessage(data));
  };

  const sendNewMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputText) return;

    const newMessage = {
      id: nanoid(),
      message: inputText,
      createdBy: me.id,
      reply: null,
    };

    const data = {
      message: newMessage,
      conversationId: activeChat?.id,
    };

    dispatch(sendMessage(data));
    setInputText("");

    setTimeout(() => {
      sendAutomatedReply(newMessage.id);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {activeChat ? (
        <>
          <header className={styles.header} onClick={handleUserProfileClick}>
            <div className={styles.profileImageContainer}>
              <img alt="Avatar" src={activeChat.avatar} />
            </div>

            <div className={styles.userCaption}>
              <h3 className={styles.title}>{activeChat.fullname}</h3>
              <span className={styles.subtitle}>last seen recently</span>
            </div>
          </header>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              {activeChat.chat.map((item) => {
                const isMine = me.id === item.createdBy;
                const repliedMessage = activeChat.chat.find(
                  (_item) => _item.id === item.reply
                );

                const reply = item.reply
                  ? {
                      message: repliedMessage?.message,
                      fullname:
                        repliedMessage?.createdBy === me.id
                          ? me.fullname
                          : activeChat.fullname,
                    }
                  : null;

                return (
                  <Message
                    key={item.id}
                    isMine={isMine}
                    data={item}
                    reply={reply}
                    createdAt="7:30 PM"
                  />
                );
              })}
            </div>
          </div>
          <form className={styles.actionBar} onSubmit={sendNewMessage}>
            <div className={styles.actionBarContainer}>
              <Input
                className={styles.inputContainer}
                placeholder="Message"
                type="normal"
                value={inputText}
                onChange={({ target }) => setInputText(target.value)}
                autoFocus
              />
              <button title="Send" className={styles.button} type="submit">
                <SendIcon className={styles.sendIcon} />
              </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default Chat;
