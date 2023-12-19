/* eslint-disable react/prop-types */
import styles from "./Article.module.scss";

const Article = ({ flexDisplay, content, children }) => {
  const articleStyle = {
    flexDirection: flexDisplay,
    justifyContent: content,
  };

  return (
    <div className={styles.article} style={articleStyle}>
      {children}
    </div>
  );
};

export default Article;
