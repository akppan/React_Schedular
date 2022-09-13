import React from 'react';

class Topic extends React.Component{
    
    state = {topic:''}

    render(){
        return (
            <div className="field">
                <label>Task Topic</label>
                <input type="text" value={this.state.topic} onChange={(e)=>{this.setState({topic:e.target.value});this.props.onSub(e.target.value)}} />
            </div>
        );
    }
}

export default Topic;