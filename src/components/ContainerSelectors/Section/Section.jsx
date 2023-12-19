/* eslint-disable react/prop-types */
import styles from "./Section.module.scss";

const Section = ({ width, height, items, flexDisplay, content, children }) => {
  const sectionStyle = {
    flexDirection: flexDisplay,
    justifyContent: content,
    alignItems: items,
    width ,
    height,
  };

  return (
    <div className={styles.section} style={sectionStyle}>
      {children}
    </div>
  );
};

export default Section;
