import React from "react";
import { Reoverlay } from "reoverlay";
import { Menu as MenuIcon } from "react-feather";
import Ripples from "react-ripples";

import Input from "components/Input";
import styles from "./SidebarHeader.module.scss";

interface Props {
  searchValue: string;
  onSearch: (text: string) => void;
}

const SidebarHeader: React.FC<Props> = ({ searchValue, onSearch }) => {
  const handleContactsModal = () => {
    Reoverlay.showModal("ContactsModal");
  };

  return (
    <div className={styles.container}>
      <Ripples className={styles.button} onClick={handleContactsModal}>
        <MenuIcon className={styles.icon} />
      </Ripples>
      <Input
        type="search"
        placeholder="Search"
        className={styles.input}
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

SidebarHeader.defaultProps = {
  searchValue: "",
  onSearch: () => null,
};

export default SidebarHeader;
