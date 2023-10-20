import React from 'react'
import * as styles from './HeroHome.module.scss';
import { LinkButtonFill, LinkButtonLine } from '../LinkButton/LinkButton';
import { StaticImage } from 'gatsby-plugin-image';

export default function HeroHome() {
  return (
    <section className={styles.hero} aria-label='hero'>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h2>Olá! Meu nome é</h2>
          <h1>Diego <br/>Souza</h1>
          <p>Designer e Desenvolvedor front-end pronto para <strong>trazer o seu projeto a vida.</strong></p>
          
          <div className={styles.row}>
            <LinkButtonLine className={styles.btnline} path="/projetos">Ver projetos</LinkButtonLine>
            <LinkButtonFill path="/contato">Vamos conversar</LinkButtonFill>
          </div>
        </div>

        <StaticImage aria-hidden className={styles.img} src='../../assets/img/dsouza-hero-image.png' alt='Diego Souza designer e desenvolvedor front-end' />
      </div>
    </section>
  )
}
