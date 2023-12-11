import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {motion} from "framer-motion";
import * as styles from './FilterBy.module.scss';

export default function FilterBy({ filterBy, updateFilter }) {
  const [filterOptions, setFilterOptions] = React.useState([]);

  const options = useStaticQuery(query).allWpMeuprojetov2.nodes;

  React.useLayoutEffect(() => {
    let arrOptions = [];    
    
    options.map((option) => option.filterby.split(', ').map((filterValue) => arrOptions.indexOf(filterValue) === -1 ? arrOptions.push(filterValue) : ''));
    setFilterOptions(arrOptions);
  }, []);

  return (
    <div className={styles.row}>
      <motion.h3 className={styles.title} initial={{opacity: 0, x: "-200px"}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5}}>Filtrar por:</motion.h3>
      {filterOptions && (
        <ul className={styles.list}>
          <motion.li initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}><button className={`${styles.btn} ${filterBy === 'all' && styles.active}`} onClick={() => updateFilter()}>todos</button></motion.li>
          {filterOptions.map((value, index) => <motion.li key={value} initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.8 + (index / 100)}}><button className={`${styles.btn} ${filterBy === value.toLowerCase() && styles.active}`} onClick={() => updateFilter(value.toLowerCase())}>{value.toLowerCase()}</button></motion.li>)}
        </ul>
      )}
    </div>
  );
}

const query = graphql`
  query MyQuery {
    allWpMeuprojetov2 {
      nodes {
        filterby
      }
    }
  }
`;
