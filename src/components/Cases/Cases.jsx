import { Link, graphql, useStaticQuery } from "gatsby";
import {motion} from 'framer-motion';
import React from "react";
import CaseCard from "./CaseCard";
import * as style from './Cases.module.scss';

export default function Cases({ projetos }) {
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [itemAtivo, setItemAtivo] = React.useState(0);
  const sliderRef = React.useRef();

  const {jobs} = useStaticQuery(graphql`
    query {
      dataJson {
        jobs
      }
    }
  `).dataJson;

  React.useEffect(() => {
    setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
    <section className={style.section} aria-label="Meus projetos">
      <div className={`${style.container} container`}>
        <div className={style.content}>
          <h2>Meus <strong>Cases</strong></h2>
          {jobs && <p>{jobs}</p>}
          <Link to="/contato">Vamos conversar?</Link>
        </div>

        <motion.div ref={sliderRef} className={style.slider} whileTap={{cursor: 'grabbing'}}>
          <motion.div className={style.wrapper} drag="x" dragConstraints={{right: 0, left: -sliderWidth}} onDragEnd={(e) => console.log(e)}>
            {projetos.nodes.map((data, index) => <CaseCard key={index} data={data} />)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}