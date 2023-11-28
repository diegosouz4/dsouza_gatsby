import React from "react";
import * as styles from './Hero.module.scss';
import FlareEffect from "../Effects/FlareEffect/FlareEffect";
import { Link } from "gatsby";
import formattedText from "../../util/formattedText";

const isBrowser = typeof window !== "undefined";

export default function Hero({showBreadcrumb, title, tags}) {
  const [breadcrumb, setBreadcrumb] = React.useState(null);

  React.useLayoutEffect(() => {
    if(isBrowser) {
      const url = window.location.pathname.split('/').filter((link) => link ? link : null);
      setBreadcrumb([...url]);
    }
  }, [])

  return (
    <section className={styles.hero} aria-label='hero'>
      <div className={`${styles.container} container fadeInUp`}>
        <div className={styles.content}>
          {title && <h1>{title}</h1> }

          { showBreadcrumb && breadcrumb && (
            <ul className={styles.breadcrumb}>
              <li><Link to="/">home</Link></li>
              {breadcrumb.map((link, index) => index + 1 === breadcrumb.length ? <li key={link}><p>{formattedText(link)}</p></li> : <li key={link}><Link to={`/${link}`}>{formattedText(link)}</Link></li>)}
            </ul>
          )}
        </div>
        
        <div className={styles.background}>
          <FlareEffect className={styles.flareRight} />
          <FlareEffect className={styles.flareLeft} />
        </div>
      </div>
    </section>
  )
}
