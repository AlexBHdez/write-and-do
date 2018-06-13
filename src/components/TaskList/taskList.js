import React from 'react';
// Components
import Task from '../Tasks/task';
// Styles
import styles from './taskList.css';

const TaskList = (props) => {

  const renderTasks = () => {
    return props.tasks.map((task, i) => {
      return(
        <Task 
          index={i}
          key={i} 
          taskValue={task.value} 
          done={task.done} 
          handleDone= { props.handleDone }  
        />
      )
    });
  }

  return(
    <div className={styles.taskListWrapper}>
      { renderTasks() }
    </div>
  )
}

export default TaskList;