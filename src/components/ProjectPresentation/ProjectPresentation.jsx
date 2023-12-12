import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from './ProjectPresentation.module.scss';
import {motion} from "framer-motion";

export default function ProjectPresentation({ images }) {
  const [error, setError] = React.useState(false);

  React.useLayoutEffect(() => {
    setError(false);

    if (!images ) {
      setError(true);
    }
  }, []);

  return (
    <section className={styles.section} aria-label="Galeria de imagens do projeto">
      <div className={`container ${styles.container}`} data-projectList="section">
        {error ? (
          <p className={styles.error}>Não foi possivel carregar o projeto! Tente novamente mais tarde, obrigado	&#128517;</p>
        ) : (
          images.map((img, index) => (
            <motion.div initial={{opacity: 0, y: "30px"}} whileInView={{opacity: 1, y: 0}} viewport={{
              once: true}} transition={{delay: 0.3}}>
              <GatsbyImage className={styles.img} style={{transform: `translateY(-${index}px)`}} key={img.title} image={getImage(img.gatsbyImage)} alt={img.altText ? img.altText : img.title}/>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
