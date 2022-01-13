import React from "react";
import { Search as SearchIcon } from "react-feather";
import classNames from "classnames";

import styles from "./Input.module.scss";

interface Props {
  className?: string;
  type?: "search" | "normal";
  placeholder: string;
}

const Input: React.FC<Props> = ({ className, placeholder, type }) => {
  return (
    <div
      className={classNames(
        styles.container,
        { [styles.searchInput]: type === "search" },
        className
      )}
    >
      {type === "search" && <SearchIcon className={styles.searchIcon} />}
      <input className={styles.input} placeholder={placeholder} dir="auto" />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  type: "normal",
};

export default Input;
