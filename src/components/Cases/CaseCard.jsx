import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { LinkButtonLine } from '../LinkButton/LinkButton';
import * as style  from './CaseCard.module.scss';

export default function CaseCard({data, isActive, ActiveRef, index}) {

  const {title, projectThumb, terms, slug} = data;
  const {gatsbyImage} = projectThumb.node;

  return (
    <motion.div ref={(el) => ActiveRef.current[index] = el } data-caseactive={isActive ? 'active' : null } className={style.wrapper}>
      <div className={style.card}>
        <GatsbyImage class={style.thumb} image={gatsbyImage} alt={`thumb do projeto ${title}`} />
        <div className={style.content}>
          {title && <h3>{title}</h3>}
          {terms && (
            <div className={style.tags}>
              {terms.nodes.map(({name}) => <span key={name}>{name}</span>)}
            </div>
          )}
          {slug && <LinkButtonLine className={style.btn} path={`/projetos/${slug}`}>Ver projeto</LinkButtonLine>}
        </div>
      </div>
    </motion.div>
  )
}