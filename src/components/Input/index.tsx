import React from "react";
import { Search as SearchIcon } from "react-feather";
import classNames from "classnames";

import styles from "./Input.module.scss";

interface Props {
  className?: string;
  type?: "search" | "normal";
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  className,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        { [styles.searchInput]: type === "search" },
        className
      )}
    >
      {type === "search" && <SearchIcon className={styles.searchIcon} />}
      <input
        className={styles.input}
        placeholder={placeholder}
        dir="auto"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  type: "normal",
  value: "",
  onChange: (e) => null,
};

export default Input;
