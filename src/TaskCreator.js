import React from 'react';
import Topic from './Topic';
import Schedule from './Datetime';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';

class TaskCreator extends React.Component {

    state={id:'', topic:'', startTime:'', endTime:''}


    onSearchTopic = (term) => {
        this.setState({topic:term})
    }
    onSearchStart = (term) => {
        this.setState({startTime:term.toString()})
    }
    onSearchEnd = (term) => {
        this.setState({endTime:term.toString()})
        this.setState({id:nanoid()})
    }


    onFormSubmit(event){
        event.preventDefault();
        this.props.onCreation(this.state);
        this.setState({id:'', topic:'', startTime:'', endTime:''})
    }

    render(){
        return (
            <div className="ui container" style={{ margin: '10px', width:'400px', display:'inline-block', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ backgroundColor:'#42f5ef',  margin:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <form onSubmit={(event) => {this.onFormSubmit(event);}} className="ui form" style={{marginLeft:'0px', marginRight:'0px', paddingLeft:'0px', paddingRight:'0px', width:'325px'}}>
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