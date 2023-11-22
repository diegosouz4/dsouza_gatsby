import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from './Testemonials.module.scss';
import CardTestemonial from "./CardTestemonial/CardTestemonial";


export default function Testemonials() {
  const [itemActive, setItemActive] = React.useState(0);
  const { testemonials } = useStaticQuery(query).dataJson;

  function handleNextItem(){
    setItemActive((prev) => prev + 1 === testemonials.length ? 0 : prev + 1);
  }

  function handlePrevItem(){
    setItemActive((prev) => prev - 1 < 0 ? testemonials.length - 1 : prev - 1);
  }

  return (
    <section className={styles.section} aria-label="Depoimentos">
      <div className={`${styles.container} container`}>
        <h2>Depoimentos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, impedit.</p>

        <div className={styles.wrapper}>
          <ul className={styles.slider}>
            {testemonials.map((testemonial, index) => <li className={index === itemActive ? styles.active : ''} key={testemonial.name} style={{transform: `translate3D(-${100 * itemActive}%, 0, 0)`}} aria-hidden={index !== itemActive ? true : false}><CardTestemonial info={testemonial} /></li>)}
          </ul>

          <button className={`${styles.btn} ${styles.btnPrev}`} onClick={handlePrevItem} aria-label="Prev item"></button>
          <button className={`${styles.btn} ${styles.btnNext}`} onClick={handleNextItem} aria-label="Next item"></button>

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