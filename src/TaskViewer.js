import React from 'react';
import TaskCreator from './TaskCreator';

const TaskViewer = () => {
    return (
        <div className="ui container" style={{ marginTop: '10px', width:'600px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div className="ui segment" style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <table style={{border:'1px solid black', width:'100%', padding:'5x', borderSpacing:"5px", borderCollapse:'collapse'}}>
                      <tbody>
                        <tr>
                            <th style={{border:'1px solid black', width:'200px'}}>Topic</th>
                            <th style={{border:'1px solid black', width:'200px'}}>Start Time</th>
                            <th style={{border:'1px solid black', width:'200px'}}>End Time</th>
                            <th style={{border:'1px solid black', width:'200px'}}>Actions</th>
                        </tr>
                        <tr>
                            <td style={{border:'1px solid black'}}>Meeting1</td>
                            <td style={{border:'1px solid black'}}>1PM</td>
                            <td style={{border:'1px solid black'}}>2PM</td>
                            <td style={{border:'1px solid black'}}>Delete</td>
                        </tr>
                      </tbody>
                  </table>
              </div>
            </div>
    );
}

export default TaskViewer;