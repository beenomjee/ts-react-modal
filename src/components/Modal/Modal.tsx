import React, { FC, ReactNode, useEffect, useState } from "react";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  direction: "LEFT" | "RIGHT" | "UP" | "DOWN";
  duration: string;
}

interface MyStyles extends React.CSSProperties {
  "--bl"?: string;
  "--bt"?: string;
  "--bx"?: string;
  "--by"?: string;
  "--al"?: string;
  "--at"?: string;
  "--ax"?: string;
  "--ay"?: string;
  "--duration"?: string;
}

const upStyle = (duration: string): MyStyles => ({
  "--bl": "50%",
  "--bt": "100%",
  "--bx": "-50%",
  "--by": "0",
  "--al": "50%",
  "--at": "50%",
  "--ax": "-50%",
  "--ay": "-50%",
  "--duration": duration,
});
const downStyle = (duration: string): MyStyles => ({
  "--bl": "50%",
  "--bt": "0%",
  "--bx": "-50%",
  "--by": "-100%",
  "--al": "50%",
  "--at": "50%",
  "--ax": "-50%",
  "--ay": "-50%",
  "--duration": duration,
});
const leftStyle = (duration: string): MyStyles => ({
  "--bl": "0%",
  "--bt": "50%",
  "--bx": "-100%",
  "--by": "-50%",
  "--al": "50%",
  "--at": "50%",
  "--ax": "-50%",
  "--ay": "-50%",
  "--duration": duration,
});
const rightStyle = (duration: string): MyStyles => ({
  "--bl": "100%",
  "--bt": "50%",
  "--bx": "100%",
  "--by": "-50%",
  "--al": "50%",
  "--at": "50%",
  "--ax": "-50%",
  "--ay": "-50%",
  "--duration": duration,
});

const Modal: FC<Props> = ({
  isOpen,
  children,
  onClose,
  direction,
  duration,
}) => {
  const [style, setStyle] = useState<MyStyles>(upStyle(duration));

  useEffect(() => {
    if (direction === "UP") setStyle(upStyle(duration));
    else if (direction === "DOWN") setStyle(downStyle(duration));
    else if (direction === "LEFT") setStyle(leftStyle(duration));
    else setStyle(rightStyle(duration));
  }, [direction, duration]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <div style={style}>
      <div
        onClick={onClose}
        className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
      ></div>
      <div className={`${styles.container} ${isOpen ? styles.modalOpen : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
