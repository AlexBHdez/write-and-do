import React from 'react';
// Components
import TaskForm from '../TaskForm/taskForm';
// Styles
import styles from './home.css';

const Home = () => {
  return(
    <div className={styles.bodyBG}>
      <div className={styles.bodyWrapper}>
        <TaskForm />
      </div>
    </div>
  )
}

export default Home;