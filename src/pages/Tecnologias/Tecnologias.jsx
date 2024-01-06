/* eslint-disable react/jsx-key */
import styles from "./Tecnologias.module.scss";
import Section from "../../components/ContainerSelectors/Section/Section";
import { Tecs } from "../../data/TecsData";

const Tecnologias = () => {
  return (
     <div className={styles.Tecnologias}>
       <h3>Tengo dominio usando</h3>
       <Section>
         <div className={styles.DivImg}>
           {Tecs.slice(0, 10).map((elemento, index) => (
             <img
               className={styles.ImgSides}
               key={index}
               src={elemento.imagenSrc}
             />
           ))}
         </div>
       </Section>
       <h3>Dispuesto a Aprender</h3>
       <Section>
       <div className={styles.DivImg}>
           {Tecs.slice(10, 15).map((elemento, index) => (
             <img
               className={styles.ImgSides}
               key={index}
               src={elemento.imagenSrc}
             />
           ))}
           <p>y mucho más</p>
         </div>
       </Section>
       <h3>Otras habilidades</h3>
       <Section>
       <div className={styles.DivImg}>
           {Tecs.slice(15).map((elemento, index) => (
             <img
               className={styles.ImgSides}
               key={index}
               src={elemento.imagenSrc}
             />
           ))}
         </div>
       </Section>
     </div>
  );
};

export default Tecnologias;
