/* eslint-disable react/prop-types */
import styles from "./ProyectCard.module.scss";

const ProyectCard = ({
  imagenSrc,
  title,
  description,
  githubLink,
  webLink,
}) => {
  return (
    <div className={styles.proyectCard}>
      <img className={styles.imgCard} src={imagenSrc} alt="" />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.gitButton} onClick={() => window.open(githubLink, "_blank")}>
            GITHUB
          </button>
          <button className={styles.webButton} onClick={() => window.open(webLink, "_blank")}>
            PAGINA WEB
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
