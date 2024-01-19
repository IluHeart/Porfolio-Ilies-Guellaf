import styles from "./Proyectos.module.scss";
import Section from "../../components/ContainerSelectors/Section/Section";
import ProyectCard from "../../components/ProyectCard/ProyectCard";
import { Projects } from "../../data/ProjectsData.mock";

const Proyectos = () => {
  return (
    <div className={styles.Proyectos}>
      <Section>
        <div className={styles.ProjectsCont}>
          {Projects.map((elemento, index) => (
            <ProyectCard
              key={index}
              imagenSrc={elemento.imagenSrc}
              title={elemento.title}
              description={elemento.description}
              githubLink={elemento.githubLink}
              webLink={elemento.webLink}
              webButtonDisabled={elemento.webButtonDisabled}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Proyectos;
