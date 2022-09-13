import React from 'react';
// import Topic from './Topic';
import SplitPane from 'react-split-pane';
import TaskCreator from './TaskCreator';
import TaskViewer from './TaskViewer';
import MyCalendar from './TaskCalendar';

//https://www.youtube.com/watch?v=lyRP_D0qCfk   --> React Calendar

class App  extends React.Component {

  state = {tasks:[]}

  addTasks = (task) => {
    // console.log(task);
    // this.states.tasks.push(task);
    if(typeof task.topic==='undefined' || typeof task.startTime==='undefined' || typeof task.endTime==='undefined' || task.topic==='' || task.startTime==='' || task.endTime===''){
      //
    }
    else{
      localStorage.setItem('tasks',JSON.stringify([...JSON.parse(localStorage.getItem('tasks')),task]));
      this.setState({
        tasks:[...this.state.tasks,task]
      },()=>{
        // console.log(this.state);
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
      // console.log(this.state);
    })
  }

  render(){
    return (
      <SplitPane split="vertical" minSize={400} defautSize={400} maxSize={800}>
        <TaskCreator onCreation={this.addTasks}/>
        {/* <TaskViewer tasks={this.state.tasks} dltTask={this.deleteTask}/> */}
        <SplitPane split="vertical" minSize={400} defautSize={400} maxSize={400}>
          <TaskViewer tasks={JSON.parse(localStorage.getItem('tasks')) || []} dltTask={this.deleteTask}/>
          <MyCalendar tasks={JSON.parse(localStorage.getItem('tasks'))} />
        </SplitPane>
      </SplitPane>
      );
  }
  
}

export default App;
