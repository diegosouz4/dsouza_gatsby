import React from "react";
import { motion } from "framer-motion";
import * as styles from './Partner.module.scss';
import Poemese from "./Logos/Poemese";
import Planetario from "./Logos/Planetario";
import Merom from "./Logos/Merom";
import FalandoemFinancas from "./Logos/FalandoemFinancas";
import SelectaLivros from "./Logos/SelectaLivros";
import CirculoLivraria from "./Logos/CirculoLivraria";
import Commtudo from "./Logos/Commtudo";
import Mcu from "./Logos/Mcu";
import { useTheme } from "../../contexts/ThemeContext";

export default function Partner() {
  const [sliderWidth, setSliderWidth] =  React.useState(null);
  const sliderRef = React.useRef(null);
  const {theme} = useTheme()

  console.log(theme)

  React.useEffect(() => {
    setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
  <section className={styles.section} aria-label="clientes">
    <motion.div ref={sliderRef} className={`${styles.container} container`} whileTap={{cursor: 'grabbing'}}>
      <motion.ul className={styles.list} drag="x" dragConstraints={{left: -sliderWidth, right: 0}}>
        <li><Poemese className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><Mcu theme={theme} /></li>
        <li><Planetario className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><FalandoemFinancas className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><Merom className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><SelectaLivros className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><CirculoLivraria className={theme === 'dark' ? styles.baseColor : ''} /></li>
        <li><Commtudo className={theme === 'dark' ? styles.baseColor : ''} /></li>
      </motion.ul>
    </motion.div>
  </section>
  );
}
