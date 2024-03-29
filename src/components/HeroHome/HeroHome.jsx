import React from 'react'
import * as styles from './HeroHome.module.scss';
import { LinkButtonLine } from '../LinkButton/LinkButton';
import { ButtonFill } from '../Button/Button';
import { StaticImage } from 'gatsby-plugin-image';
import FlareEffect from '../Effects/FlareEffect/FlareEffect';
import {useTheme} from "../../contexts/ThemeContext";

export default function HeroHome() {
  const {handleModal} = useTheme();
  
  return (
    <section className={styles.hero} aria-label='hero'>
      <div className={`${styles.container} container fadeInUp`}>
        <div className={styles.content}>
          <h2>Olá! Meu nome é</h2>
          <h1>Diego <br/>Souza</h1>
          <p>Designer e Desenvolvedor front-end pronto para <strong>trazer o seu projeto a vida.</strong></p>
          
          <div className={styles.row}>
            <LinkButtonLine className={styles.btnline} path="/projetos">Ver projetos</LinkButtonLine>
            <ButtonFill handleClick={handleModal} >Vamos conversar</ButtonFill>
          </div>
        </div>

        <StaticImage 
          aria-hidden
          placeholder='none'
          className={styles.thumb}
          id={styles.thumb}
          style={{position: 'absolute', bottom: 0, right: 20, overflow: 'visible'}}
          src='../../assets/img/dsouza-hero-image.png'
          alt='Diego Souza designer e desenvolvedor front-end'
        />
        
        <div className={styles.background}>
          <FlareEffect className={styles.flareRight} />
          <FlareEffect className={styles.flareLeft} />
        </div>
      </div>
    </section>
  )
}
