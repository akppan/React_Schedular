import React from 'react';

class Topic extends React.Component{
    
    state = {topic:''}

    render(){
        return (
            <div className="field">
                <label>Task Topic</label>
                <input type="text" value={this.state.topic} onChange={(e)=>this.setState({topic:e.target.value})} onBlur={(e)=>this.props.onSub(this.state.topic)} />
            </div>
        );
    }
}

export default Topic;