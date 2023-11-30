import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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
      <h3 className={styles.title}>Filtrar por:</h3>
      {filterOptions && (
        <ul className={styles.list}>
          <li><button className={`${styles.btn} ${filterBy === 'all' && styles.active}`} onClick={() => updateFilter()}>todos</button></li>
          {filterOptions.map((value) => <li key={value}><button className={`${styles.btn} ${filterBy === value.toLowerCase() && styles.active}`} onClick={() => updateFilter(value.toLowerCase())}>{value.toLowerCase()}</button></li>)}
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
