import React from 'react';
import Topic from './Topic';
import Schedule from './Datetime';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';

class TaskCreator extends React.Component {

    state={id:'', topic:'', startTime:'', endTime:''}


    onSearchTopic = (term) => {
        // console.log(term);
        this.setState({topic:term})
    }
    onSearchStart = (term) => {
        // console.log(term);
        this.setState({startTime:term})
    }
    onSearchEnd = (term) => {
        // console.log(term);
        this.setState({endTime:term})
        this.setState({id:nanoid()})
    }


    onFormSubmit(event){
        event.preventDefault();
        this.setState({topic:this.top,startTime:this.stD,endTime:this.enD});
        // console.log(this.state); 
        this.props.onCreation(this.state);
    }

    render(){
        return (
            <div className="ui container" style={{ margin: '10px', width:'400px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ backgroundColor:'#42f5ef', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <form onSubmit={(event) => {this.onFormSubmit(event);}} className="ui form" style={{ fontFamily:'sans-serif, Verdana, Tahoma', fontWeight:'bold', fontSize:'1.5em' }}>
                      <Topic onSub={this.onSearchTopic}/>
                      <div className="field" style={{marginBottom:'20px' }}>
                          <label>Start Time</label>
                          <Schedule onSub={this.onSearchStart}/>
                      </div>
                      <div className="field" style={{marginBottom:'20px' }}>
                          <label>End Time</label>
                          <Schedule onSub={this.onSearchEnd}/>
                      </div>
                      <Button type="submit" style={{ backgroundColor:'#fff', fontWeight:'bold'}}>Schedule Task</Button>
                  </form>
              </div>
            </div>
            );
    }
}

export default TaskCreator;