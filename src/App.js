import React from 'react';
// import Topic from './Topic';
import SplitPane from 'react-split-pane';
import TaskCreator from './TaskCreator';
import TaskViewer from './TaskViewer';

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
      this.setState({
        tasks:[...this.state.tasks,task]
      },()=>{
        // console.log(this.state);
      })
    }
  }

  deleteTask = (id) => {
    const newState = this.state.tasks.filter(task => task.id!==id)
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
        <TaskViewer tasks={this.state.tasks} dltTask={this.deleteTask}/>
      </SplitPane>
      );
  }
  
}

export default App;
