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
      <RotateFlexResp>
        <Section
          items="center"
          content="start"
          flexDisplay="column"
        >
  <div style={{display: "flex", flexDirection: "column" , alignItems: "start", gap:"15px"}}>
            <p>
              ¡Hola! Soy <strong>Ilies guellaf chakiri</strong> , un apasionado desarrollador web full stack
              junior.
            </p>
            <p>
              Mi fascinación por la creación de experiencias digitales me
              lleva a explorar continuamente nuevas tecnologías.
            </p>
  </div>
          <div className={styles.lineaSpace}></div>
          <p>
            Especializado en HTML, CSS, JavaScript , Node.js y react.js, estoy
            comprometido con la eficiencia y el diseño atractivo. Busco desafíos
            emocionantes para aplicar y expandir mis habilidades. ¡Vamos a
            construir algo increíble juntos!
          </p>
        </Section>
        <Section width="100%" content="center">
          <img
            className={styles.cover}
            src="/Imagen de respaldo/FotoPresentacion.JPG"
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
