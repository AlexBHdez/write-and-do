import React from 'react';
// Styles
import styles from './taskForm.css';

const TaskForm = (props) => {
  
  return(
      <form className={styles.taskWrapper}
        onSubmit={ (event) => props.handleSubmit(event) }
      >
        <input
          className={styles.taskInput}
          value={props.inputValue}
          onChange={ (event) => props.handleChangeInput(event.target.value) }
        />
        <button
          className={styles.addTask}
        >
          Add task
        </button>
      </form>
  )
}

export default TaskForm;