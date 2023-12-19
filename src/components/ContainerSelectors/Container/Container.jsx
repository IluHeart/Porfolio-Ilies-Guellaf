import { useEffect, useState } from "react";
import styles from "./Container.module.scss";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container} style={{ height: `${windowHeight}px` }}>
      {children}
    </div>
  );
};

export default Container;