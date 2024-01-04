/* eslint-disable react/jsx-key */
import styles from "./Tecnologias.module.scss";
import Section from "../../components/ContainerSelectors/Section/Section";
import { DomitatedTecs } from "../../data/DomitatedTecs";

const Tecnologias = () => {
  return (
   <Section>
     <div className={styles.Tecnologias}>
       <h3>Tengo dominio usando</h3>
       <Section>
         <div className={styles.DivImg}>
           {DomitatedTecs.map((elemento, index) => (
             <img
               className={styles.ImgSides}
               key={index}
               src={elemento.imagenSrc}
             />
           ))}
         </div>
       </Section>
       <h3>Dispuesto a Aprender</h3>
       <Section></Section>
       <h3>Otras habilidades</h3>
       <Section></Section>
     </div>
   </Section>
  );
};

export default Tecnologias;
