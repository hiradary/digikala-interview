import { Menu as MenuIcon } from "react-feather";
import Ripples from "react-ripples";

import Input from "components/Input";
import styles from "./SidebarHeader.module.scss";

const SidebarHeader = () => {
  return (
    <div className={styles.container}>
      <button type="button" title="Menu" className={styles.button}>
        <Ripples>
          <MenuIcon />
        </Ripples>
      </button>
      <Input className={styles.input} />
    </div>
  );
};

export default SidebarHeader;
