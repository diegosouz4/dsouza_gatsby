import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from './ProjectPresentation.module.scss';

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
      <div className={`container ${styles.container}`}>
        {error ? (
          <p className={styles.error}>Não foi possivel carregar o projeto! Tente novamente mais tarde, obrigado	&#128517;</p>
        ) : (
          images.map((img, index) => (
            <GatsbyImage
              className={styles.img}
              style={{transform: `translateY(-${index}px)`}}
              key={img.title}
              image={getImage(img.gatsbyImage)}
              alt={img.altText ? img.altText : img.title}
            />
          ))
        )}
      </div>
    </section>
  );
}
