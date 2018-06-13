import React, { Component } from 'react';
// Components
import TaskForm from '../TaskForm/taskForm';
import TaskList from '../TaskList/taskList';
// Styles
import styles from './home.css';

class Home extends Component {

  state = {
    inputValue: '',
    tasks: [],
  }
  
  handleChangeInput = (input) => {
    this.setState({
      inputValue: input,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const newTask = {
      value: this.state.inputValue,
      done: false,
    };

    const tasks = this.state.tasks;
    
    tasks.push(newTask);

    this.setState({
      inputValue: '',
      tasks,
    })
  }

  handleDone = (index) => {
    const tasks = this.state.tasks;
    tasks[index].done = !tasks[index].done;
    this.setState({
      tasks,
    })
  }
  
  render() {
    return(
      <div className={styles.bodyBG}>
        <div className={styles.bodyWrapper}>
          <TaskForm 
            inputValue={this.state.inputValue}
            handleChangeInput= { (input) => this.handleChangeInput(input) }
            handleSubmit= { (event) => this.handleSubmit(event) }
            />
          <TaskList 
            tasks={this.state.tasks}
            handleDone= { this.handleDone }
          />
        </div>
      </div>
    )
  }
}

export default Home;