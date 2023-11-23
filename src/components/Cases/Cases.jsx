import { Link, graphql, useStaticQuery } from "gatsby";
import {motion} from 'framer-motion';
import React from "react";
import CaseCard from "./CaseCard";
import * as styles from './Cases.module.scss';

export default function Cases({ projetos }) {
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [itemAtivo, setItemAtivo] = React.useState(0);
  const [dragInfo, setDragInfo] = React.useState({lastPosition: 0, accPosition: 0});
  
  const sliderRef = React.useRef();
  const wrapperRef = React.useRef();
  const ActiveRef = React.useRef([]);

  const {jobs} = useStaticQuery(graphql`
    query {
      dataJson {
        jobs
      }
    }
  `).dataJson;

  React.useEffect(() => {
    const activeItem = ActiveRef.current.filter((item) => item.dataset.caseactive !== undefined)[0].getBoundingClientRect().width * (projetos.nodes.length - 1);
    // setSliderWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    console.log(Math.floor(activeItem));
    setSliderWidth(activeItem);
  }, [projetos.nodes.length]);

  React.useEffect(() => {
    const activeItem = ActiveRef.current.filter((item) => item.dataset.caseactive !== undefined)[0];
    const itemWidth = (activeItem.getBoundingClientRect().width * itemAtivo) * -1 + 'px';

    wrapperRef.current.style.transform = `translateX(${itemWidth}) translateY(0px) translateZ(0px)`;
    console.log(wrapperRef.current)
  }, [itemAtivo]);

  function handleNextItem() {
    setItemAtivo((prev) => prev + 1 >= projetos.nodes.length ? projetos.nodes.length - 1 : prev + 1 );
  }

  function handlePrevItem() {
    setItemAtivo((prev) => prev - 1 < 0 ? 0 : prev - 1 );
  }

  function handleDragPosition(e){
    const positionResult = dragInfo.lastPosition - e.clientX;
    if(positionResult > 0) {
      handleNextItem();
      console.log('show next card!');
      return;
    }
    
    console.log('show prev card!');
    handlePrevItem();
  }

  function getInitialPosition(e) {
    setDragInfo((prev) => {return {...prev, lastPosition: e.clientX}});
  }

  console.log(dragInfo)

  return (
    <section className={styles.section} aria-label="Meus projetos">
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h2>Meus <strong>Cases</strong></h2>
          {jobs && <p>{jobs}</p>}
          <Link to="/contato">Vamos conversar?</Link>
        </div>

        <motion.div ref={sliderRef} className={styles.slider} whileTap={{cursor: 'grabbing'}}>
          <motion.div ref={wrapperRef}  className={styles.wrapper} drag="x" dragConstraints={{right: 0, left: -sliderWidth}} onDragStart={getInitialPosition} onDragEnd={handleDragPosition}>
            {projetos.nodes.map((data, index) => <CaseCard ActiveRef={ActiveRef} index={index} isActive={index === itemAtivo ? true : false} key={index} data={data} />)}
          </motion.div>

          <button onClick={handleNextItem}  styles={{background: 'white', position: 'absolute', top: '50%', right:0, transform: 'translateY(-50%)' }}>next</button>
          <button onClick={handlePrevItem}  styles={{background: 'white', position: 'absolute', top: '50%', left:0, transform: 'translateY(-50%)' }}>prev</button>
        </motion.div>
      </div>
    </section>
  );
}