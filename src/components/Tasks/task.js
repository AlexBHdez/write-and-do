import React from 'react';
// Styles
import styles from './task.css';

const Task = (props) => {

  const renderButton = () => {
    return props.done ? 
      <button
          onClick={ () => props.handleDone(props.index) }
        >
          Completed
      </button>
      :
      <button
          onClick={ () => props.handleDone(props.index) }
        >
          Undo
      </button>
  }

  return(
    <div className={styles.task}>
      {props.taskValue}
      {renderButton()}
    </div>
  )
}

export default Task;