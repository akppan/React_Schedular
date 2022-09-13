import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Schedule extends React.Component {

    state = {date:''}

    render(){
        return (
            <div>
                <DatePicker selected={this.state.date} onChange={(val) => {this.setState({date:val});this.props.onSub(val)}} showTimeSelect dateFormat="Pp" timeFormat="p" timeIntervals={15} />
            </div>
        )
    }    
}


export default Schedule;