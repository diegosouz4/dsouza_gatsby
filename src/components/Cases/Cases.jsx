import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import CaseCard from "./CaseCard";
import * as styles from './Cases.module.scss';

export default function Cases({ projetos }) {
  const [itemActive, setItemActive] = React.useState(0);
  const [initSliderDrag, setInitSliderDrag] = React.useState(false);
  const [sliderPosiion, setSliderPosiion] = React.useState({startX: 0, movement: 0, finalX:0});

  const {jobs} = useStaticQuery(graphql`
    query {
      dataJson {
        jobs
      }
    }
  `).dataJson;

  function handleNextItem(){
    setItemActive((prev) => prev + 1 === projetos.nodes.length ? projetos.nodes.length - 1 : prev + 1);
  }

  function handlePrevItem(){
    setItemActive((prev) => prev - 1 < 0 ? 0 : prev - 1);
  }

  function initDragSlider(event){
    const clientX = event.type === 'mousedown' ? event.clientX : event.type === 'touchstart' ? event.targetTouches[0].clientX : null;
    if(!clientX) return

    setInitSliderDrag(true);
    setSliderPosiion((prev) => {return {...prev, startX: clientX, finalX: 0}});
  }

  function handleDragMove(event){
    const clientX = event.type === 'mousemove' ? event.clientX : event.type === 'touchmove' ? event.targetTouches[0].clientX : null;
    if(!initSliderDrag || !clientX) return;
    
    setSliderPosiion((prev) => {return {...prev, movement: sliderPosiion.startX - clientX}});
  }

  function endDragSlider(){
    setInitSliderDrag(false);
    setSliderPosiion((prev) => {return {...prev, finalX: sliderPosiion.movement}});
  }

  React.useEffect(() => {
    if(!initSliderDrag && sliderPosiion.finalX !== 0) {
      sliderPosiion.finalX > 0 ? handleNextItem() : handlePrevItem();
    };
  }, [initSliderDrag]);


  return (
    <section className={styles.section} aria-label="Meus projetos">
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h2>Meus <strong>Cases</strong></h2>
          {jobs && <p>{jobs}</p>}
          <Link to="/contato">Vamos conversar?</Link>
        </div>

        <div className={styles.wrapper}>
          <div className={`${styles.slider} ${initSliderDrag ? styles.drag : ''}`}
            onMouseDown={initDragSlider}
            onMouseMove={handleDragMove}
            onMouseLeave={endDragSlider}
            onMouseUp={endDragSlider}
            onTouchStart={initDragSlider}
            onTouchMove={handleDragMove}
            onTouchEnd={endDragSlider}
          >
            {projetos.nodes.map((data, index) => <CaseCard key={index} data={data} isActive={itemActive === index} itemActive={itemActive} />)}
          </div>

          {itemActive !== 0 &&  <button className={`${styles.btn} ${styles.btnPrev}`} onClick={handlePrevItem} aria-label="Prev item"></button>}
          {itemActive !== projetos.nodes.length - 1 && <button className={`${styles.btn} ${styles.btnNext}`} onClick={handleNextItem} aria-label="Next item"></button>}
        </div>
      </div>
    </section>
  );
}