import React from "react";
import { Search as SearchIcon } from "react-feather";
import classNames from "classnames";

import styles from "./Input.module.scss";

interface Props {
  className?: string;
  type: "search" | "normal";
}

const Input: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <SearchIcon className={styles.searchIcon} />
      <input className={styles.input} placeholder="Search" dir="auto" />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  type: "normal",
};

export default Input;
