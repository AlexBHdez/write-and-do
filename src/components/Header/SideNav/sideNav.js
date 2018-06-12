import React from 'react';
// Simple sidenav package
import SimpleSideNav from 'react-simple-sidenav';
// Components
import SideNavItems from './sideNavItems';

const SideNav = (props) => {
  return(
    <div>
      < SimpleSideNav 
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          backgroundColor: '#fff',
          maxWidth: '250px',
        }}
      >
        < SideNavItems {...props} />
      </ SimpleSideNav >
    </div>
  )
}

export default SideNav;