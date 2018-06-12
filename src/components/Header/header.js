import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import FaBars from 'react-icons/lib/fa/bars';
import styles from './header.css';
// Components
import SideNav from './SideNav/sideNav';

const Header = (props) => {

  const logo = () => (
    < Link to="/" >
      <div className={styles.logo}>Write&Do</div>
    </ Link >
  )

  const navBars = () => (
    <div className={styles.bars}>
      < FaBars 
        onClick={props.onOpenNav}
        style={{
          color: '#565a6a',
          cursor: 'pointer',
        }}
      />
    </div>
  )





  return(
    <header className={styles.header}>
      < SideNav {...props} />
      <div className={styles.headerOpt}>
        { navBars() }
        { logo() }
      </div>
    </header>
  )
}

export default Header;