import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './sideNav.css';
import * as FontAwesome from 'react-icons/lib/fa';

const SideNavItems = (props) => {

  // Menu items for sidenav
  const items = [
    {
      type: styles.option,
      icon: < FontAwesome.FaHome />,
      text: <p>Home</p>,
      link: '/',
    },
    {
      type: styles.option,
      icon: < FontAwesome.FaUser />,
      text: <p>Profile</p>,
      link: '/profile',
    },
    {
      type: styles.option,
      icon: < FontAwesome.FaSignIn />,
      text: <p>Sign-in</p>,
      link: '/sign-in',
    },
    {
      type: styles.option,
      icon: < FontAwesome.FaSignOut />,
      text: <p>Sign out</p>,
      link: '/sign-out',
    },
  ];

  // Just to iterate through the items and call the element function
  const showItems = () => {
    return items.map((item, i) => {
      return element(item, i);
    })
  }

  // A function to return a div for each items in the items array
  const element = (item, i) => (
    <div key={i} className={item.type}>
      < Link to={item.link}>
        { item.icon }
        { item.text }
      </ Link >
    </div>
  )











  return(
    <div>
      { showItems() }
    </div>
  )
}

export default SideNavItems;