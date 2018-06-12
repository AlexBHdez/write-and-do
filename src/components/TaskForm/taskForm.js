import React from 'react';
// Styles
import styles from './taskForm.css';

const TaskForm = ({addTask}) => {
  let input;

  return(
    <div className={styles.taskWrapper}>
      <input
        className={styles.taskInput}
        ref={ node => {
          input = node;
        }}
      />
      <button
        className={styles.addTask}
        onClick={ () => {
          addTask(input.value);
          input.value = '';
        }}
      >
        Add task
      </button>
    </div>
  )
}

export default TaskForm;