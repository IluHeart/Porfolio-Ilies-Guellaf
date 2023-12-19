/* eslint-disable react/prop-types */
import styles from "./RotateFlexResp.module.scss";

const RotateFlexResp = ({ width, height, content, children }) => {
  const RotateStyle = {
    justifyContent: content,
    width ,
    height,
  };

  return (
    <div className={styles.rotate} style={RotateStyle}>
      {children}
    </div>
  );
};

export default RotateFlexResp;
