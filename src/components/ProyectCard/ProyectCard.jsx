/* eslint-disable react/prop-types */
import styles from "./ProyectCard.module.scss"

const ProyectCard = ({ title, description }) => {
    return (
      <div className={styles.proyectCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    );
  };
  
  export default ProyectCard;