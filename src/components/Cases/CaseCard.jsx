import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { LinkButtonLine } from '../LinkButton/LinkButton';
import * as styles  from './CaseCard.module.scss';

export default function CaseCard({data, isActive, itemActive}) {

  const {title, projectThumb, terms, slug} = data;
  const {gatsbyImage} = projectThumb.node;

  return (
    <div className={`${styles.wrapper} ${isActive && 'active'}`} aria-hidden={isActive} style={{transform: `translate3D(-${100 * itemActive}%, 0, 0)`}}>
      <div className={styles.card}>
        <GatsbyImage class={styles.thumb} image={gatsbyImage} alt={`thumb do projeto ${title}`} />
        <div className={styles.content}>
          {title && <h3>{title}</h3>}
          {terms && (
            <div className={styles.tags}>
              {terms.nodes.map(({name}) => <span key={name}>{name}</span>)}
            </div>
          )}
          {slug && <LinkButtonLine className={styles.btn} path={`/projetos/${slug}`}>Ver projeto</LinkButtonLine>}
        </div>
      </div>
    </div>
  )
}