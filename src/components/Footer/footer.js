import React from 'react';

// Config to get the current year
import { CURRENT_YEAR } from '../../config';

// styles
import styles from './footer.css';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        @Write&Do { CURRENT_YEAR } All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;