import React from 'react';
import TaskCreator from './TaskCreator';
import TaskViewer from './TaskViewer';
import MyCalendar from './TaskCalendar';


class App  extends React.Component {

  state = {tasks:[]}

  addTasks = (task) => {
    if(typeof task.topic==='undefined' || typeof task.startTime==='undefined' || typeof task.endTime==='undefined' || task.topic==='' || task.startTime==='' || task.endTime===''){
      //
    }
    else{
      localStorage.setItem('tasks',JSON.stringify([...JSON.parse(localStorage.getItem('tasks')),task]));
      this.setState({
        tasks:[...this.state.tasks,task]
      },()=>{
        //
      })
    }
  }

  deleteTask = (id) => {
    const tasksArray = JSON.parse(localStorage.getItem('tasks'));
    const newState = tasksArray.filter(task => task.id!==id)
    localStorage.setItem('tasks',JSON.stringify(newState));
    this.setState({
      tasks:newState
    },()=>{
    })
  }

  render(){
    return (
      <div>
          <TaskCreator onCreation={this.addTasks}/>
          <TaskViewer tasks={JSON.parse(localStorage.getItem('tasks')) || []} dltTask={this.deleteTask}/>
          <MyCalendar tasks={JSON.parse(localStorage.getItem('tasks'))} />
      </div>
      
    );
  }
  
}

export default App;
