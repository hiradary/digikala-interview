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
  autoFocus?: boolean;
}

const Input: React.FC<Props> = ({
  className,
  placeholder,
  type,
  value,
  onChange,
  autoFocus,
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
        autoFocus={autoFocus}
      />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  type: "normal",
  value: "",
  onChange: (e) => null,
  autoFocus: false,
};

export default Input;
