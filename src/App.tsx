import { Reoverlay, ModalContainer } from "reoverlay";

import Sidebar from "components/Sidebar";
import Chat from "components/Chat";
import Contacts from "components/Contacts";
import UserProfile from "components/UserProfile";
import styles from "./App.module.scss";

import "reoverlay/lib/ModalWrapper.css";

Reoverlay.config([
  {
    name: "ContactsModal",
    component: Contacts,
  },
  {
    name: "UserProfileModal",
    component: UserProfile,
  },
]);

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          <Sidebar />
          <Chat />
        </div>
      </div>
      <ModalContainer />
    </>
  );
};

export default App;
