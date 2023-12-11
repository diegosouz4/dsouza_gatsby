import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from './Testemonials.module.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CardTestemonial from "./CardTestemonial/CardTestemonial";


export default function Testemonials() {
  const [itemActive, setItemActive] = React.useState(0);
  const [initSliderDrag, setInitSliderDrag] = React.useState(false);
  const [sliderPosiion, setSliderPosiion] = React.useState({startX: 0, movement: 0, finalX:0});

  const { testemonials } = useStaticQuery(query).dataJson;

  function handleNextItem(){
    setItemActive((prev) => prev + 1 === testemonials.length ? testemonials.length - 1 : prev + 1);
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

  React.useLayoutEffect(() => {
    if(!initSliderDrag && sliderPosiion.finalX !== 0) {
      sliderPosiion.finalX > 0 ? handleNextItem() : handlePrevItem();
    };
  }, [initSliderDrag]);

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("[data-testmonials='slider']", {
      opacity: 0,
      x: 400
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "[data-testmonials='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px"
      }
    });

    gsap.fromTo("[data-testmonials='title']", {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "[data-testmonials='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px"
      }
    });

    gsap.fromTo("[data-testmonials='desc']", {
      opacity: 0,
      y: 150
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "[data-testmonials='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px"
      }
    });
    
    return () => {
      gsap.killTweensOf("[data-testmonials='title']");
      gsap.killTweensOf("[data-testmonials='desc']");
      gsap.killTweensOf("[data-testmonials='slider']");
    }
  }, []);

  return (
    <section className={styles.section} aria-label="Depoimentos" data-testmonials="section">
      <div className={`${styles.container} container`}>
        <h2 data-testmonials="title">Depoimentos</h2>
        <p data-testmonials="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, impedit.</p>

        <div className={styles.wrapper} data-testmonials="slider">
          <ul className={`${styles.slider} ${initSliderDrag ? styles.drag : ''}`}
            onMouseDown={initDragSlider}
            onMouseMove={handleDragMove}
            onMouseLeave={endDragSlider}
            onMouseUp={endDragSlider}
            onTouchStart={initDragSlider}
            onTouchMove={handleDragMove}
            onTouchEnd={endDragSlider}
          >
            {testemonials.map((testemonial, index) => <li className={index === itemActive ? styles.active : ''} key={testemonial.name} style={{transform: `translate3D(-${100 * itemActive}%, 0, 0)`}} aria-hidden={index !== itemActive ? true : false}><CardTestemonial info={testemonial} /></li>)}
          </ul>

          {itemActive !== 0 && <button className={`${styles.btn} ${styles.btnPrev}`} onClick={handlePrevItem} aria-label="Prev item"></button>}
          {itemActive !== testemonials.length - 1 && <button className={`${styles.btn} ${styles.btnNext}`} onClick={handleNextItem} aria-label="Next item"></button>}

          <div className={styles.dots}>
            {testemonials.map((el, index) => <button className={index === itemActive ? styles.active : ''} onClick={() => {setItemActive(index)}} key={index} aria-label={`Show item ${index + 1}`} ></button>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const query = graphql`
  query {
    dataJson {
      testemonials {
        role
        quote
        name
      }
    }
  }
`;
