import { Reoverlay } from "reoverlay";
import { Menu as MenuIcon } from "react-feather";
import Ripples from "react-ripples";

import Input from "components/Input";
import styles from "./SidebarHeader.module.scss";

const SidebarHeader = () => {
  const handleContactsModal = () => {
    Reoverlay.showModal("ContactsModal");
  };

  return (
    <div className={styles.container}>
      <Ripples className={styles.button} onClick={handleContactsModal}>
        <MenuIcon className={styles.icon} />
      </Ripples>
      <Input type="search" placeholder="Search" className={styles.input} />
    </div>
  );
};

export default SidebarHeader;
