import styles from "./Proyectos.module.scss";
import Section from "../../components/ContainerSelectors/Section/Section";
import ProyectCard from "../../components/ProyectCard/ProyectCard";

const Proyectos = () => {
  return (
    <div className={styles.Proyectos}>
      <Section>
        <ProyectCard
          imagenSrc="./imagenes de los proyectos/Miniatura EA.jpg"
          title="Replicación de la Página Web de Electronic Arts en React"
          description={"Este fue el proyecto que presentamos al final del bootcamp para mostrar el uso de componentes reutilizables y manejables con Reactjs"}
        />
      </Section>
    </div>
  );
};

export default Proyectos;
