import React from 'react';
import { Button } from '@mui/material';
// import TaskCreator from './TaskCreator';

const TaskViewer = (props) => {
    // console.log(props);
    const tsks = props.tasks.map((task)=>{
        return (
        <tr key={task.id}>
            <td style={{border:'1px solid black'}}>{task.topic}</td>
            <td style={{border:'1px solid black'}}>{(task.startTime)}</td>
            <td style={{border:'1px solid black'}}>{(task.endTime)}</td>
            <td style={{border:'1px solid black'}}><Button tid={task.id} onClick={(event) => {props.dltTask(task.id)}}>Delete</Button></td>
        </tr>
        )
    });
    return (
        <div className="ui container" style={{ marginTop: '10px', width:'600px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <table style={{border:'1px solid black', width:'100%', padding:'5x', borderSpacing:"5px", borderCollapse:'collapse'}}>
                      <tbody>
                        <tr>
                            <th style={{border:'1px solid black', width:'200px'}}>Topic</th>
                            <th style={{border:'1px solid black', width:'200px'}}>Starts At</th>
                            <th style={{border:'1px solid black', width:'200px'}}>Ends At</th>
                            <th style={{border:'1px solid black', width:'200px'}}>Actions</th>
                        </tr>
                        {tsks}
                      </tbody>
                  </table>
              </div>
            </div>
    );
}

export default TaskViewer;