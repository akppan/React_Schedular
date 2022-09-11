import React from 'react';
import Topic from './Topic';
import Schedule from './Datetime';
import { Button } from '@mui/material';

class TaskCreator extends React.Component {

    state={topic:'',startTime:'',endTime:''}


    onSearchSub(term){
        console.log(term);
    }


    onFormSubmit(event){
        event.preventDefault();
        // console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{ margin: '10px', width:'400px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ backgroundColor:'#42f5ef', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form" style={{ fontFamily:'sans-serif, Verdana, Tahoma', fontWeight:'bold', fontSize:'1.5em' }}>
                      <Topic onSub={this.onSearchSub}/>
                      <div className="field" style={{marginBottom:'20px' }}>
                          <label>Start Time</label>
                          <Schedule onSub={this.onSearchSub}/>
                      </div>
                      <div className="field" style={{marginBottom:'20px' }}>
                          <label>End Time</label>
                          <Schedule onSub={this.onSearchSub}/>
                      </div>
                      <Button type="submit" style={{ backgroundColor:'#fff', fontWeight:'bold'}}>Schedule Task</Button>
                  </form>
              </div>
            </div>
            );
    }
}

export default TaskCreator;