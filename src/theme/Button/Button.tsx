import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  buttonText: React.ReactNode;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  onClick,
  buttonText,
  href,
  disabled = false,
  loading = false
}: ButtonProps): JSX.Element => {
  const buttonContent = loading ? "Loading..." : buttonText;

  const handleClick = (): void | undefined => {
    if (disabled) return;
    onClick?.();
  };

  return href ? (
    <Link className={clsx(styles.button, { [styles.disabled]: disabled })} to={href}>
      {buttonContent}
    </Link>
  ) : (
    <button className={clsx(styles.button, { [styles.disabled]: disabled })} onClick={handleClick}>
      {buttonContent}
    </button>
  );
};

export default Button;
