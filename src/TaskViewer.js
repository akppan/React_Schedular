import React from 'react';

const TaskViewer = (props) => {
    const tsks = props.tasks.map((task)=>{
        return (
        <tr key={task.id}>
            <td style={{border:'1px solid black'}}>{task.topic}</td>
            <td style={{border:'1px solid black'}}>{(task.startTime)}</td>
            <td style={{border:'1px solid black'}}>{(task.endTime)}</td>
            <td style={{border:'1px solid black', textAlign:'center'}}><button className="ui inverted red button" tid={task.id} onClick={(event) => {props.dltTask(task.id)}}>Delete</button></td>
        </tr>
        )
    });
    return (
        <div className="ui container" style={{ margin: '10px', width:'600px', display:'inline-block', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <table className="ui celled table">
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