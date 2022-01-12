import { Menu as MenuIcon } from "react-feather";
import Ripples from "react-ripples";

import Input from "components/Input";
import styles from "./SidebarHeader.module.scss";

const SidebarHeader = () => {
  return (
    <div className={styles.container}>
      <Ripples className={styles.button}>
        <MenuIcon className={styles.icon} />
      </Ripples>
      <Input className={styles.input} />
    </div>
  );
};

export default SidebarHeader;
