import React from "react";
import { useSpring, animated } from "react-spring";
import cx from "clsx";

import styles from "./Toast.module.scss";

interface ToastProps {
  message: string;
  type?: "error" | "hidden";
}

const Toast = ({ message, type = "hidden" }: ToastProps): JSX.Element => {
  const spring = useSpring({
    from: { transform: "translate3d(0,-50px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
    config: { mass: 1, tension: 400, friction: 20 }
  });

  return (
    <animated.div style={spring} className={cx(styles.toast, styles[type])}>
      <div className={styles.message}>{message}</div>
    </animated.div>
  );
};

export default Toast;
