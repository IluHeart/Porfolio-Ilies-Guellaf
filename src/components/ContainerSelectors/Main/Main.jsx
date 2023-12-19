/* eslint-disable react/prop-types */
import styles from "./Main.module.scss";

const Main = ({ flexDisplay, content, children }) => {
  const MainStyle = {
    flexDirection: flexDisplay,
    justifyContent: content,
  };

  return (
    <div className={styles.main} style={MainStyle}>
      {children}
    </div>
  );
};

export default Main;
