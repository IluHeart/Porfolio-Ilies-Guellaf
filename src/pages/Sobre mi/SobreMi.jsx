import styles from "./SobreMi.module.scss";
import Section from "../../components/ContainerSelectors/Section/Section";
import RotateFlexResp from "../../components/ContainerSelectors/RotateFlexResp/RotateFlexResp";

const SobreMi = () => {
  return (
    <div className={styles.sobreMi}>
      <Section width="100%" content="flex-start" items="center">
        <h3 className={styles.title}>Sobre mi</h3>
        <div className={styles.lineaTittle}></div>
      </Section>
      <RotateFlexResp width="100%">
        <Section
          width="100%"
          height="100%"
          items="center"
          content="center"
          flexDisplay="column"
        >
          <p>
            ¡Hola! Soy Ilies , un apasionado desarrollador web full stack
            junior. Mi fascinación por la creación de experiencias digitales me
            lleva a explorar continuamente nuevas tecnologías.
          </p>
          <div className={styles.lineaSpace}></div>
          <p>
            Especializado en HTML, CSS, JavaScript , Node.js y react.js, estoy
            comprometido con la eficiencia y el diseño atractivo. Busco desafíos
            emocionantes para aplicar y expandir mis habilidades. ¡Vamos a
            construir algo increíble juntos!
          </p>
        </Section>
        <Section width="100%" height="100%" content="center">
          <img
            className={styles.cover}
            src="/Imagen de respaldo/IMG_0815.JPG"
            alt=""
          />
          <div className={styles.contIcoDevelHope}>
            <img
              className={styles.icoDevelHope}
              src="/Imagen de respaldo/ShieldDevelHope.png"
              alt=""
            />
          </div>
        </Section>
      </RotateFlexResp>
    </div>
  );
};

export default SobreMi;
