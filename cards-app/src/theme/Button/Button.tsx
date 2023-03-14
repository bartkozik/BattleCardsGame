import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  buttonText?: React.ReactNode;
  href?: string;
}

const Button = ({ onClick, buttonText, href }: ButtonProps): JSX.Element => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  if (href) {
    return (
      <div className={styles.buttonBackground}>
        <NavLink to={href} className={styles.button}>
          {buttonText}
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className={styles.buttonBackground}>
        <button className={styles.button} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    );
  }
};

export default Button;
