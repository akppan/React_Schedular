import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// const Schedule = () => {
//     const [startDate, setStartDate] = useState(new Date());

//     return (
//         <div>
//             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" timeFormat="p" timeIntervals={15} />
//         </div>
//     )
// }

class Schedule extends React.Component {

    state = {date:''}

    render(){
        return (
            <div>
                <DatePicker selected={this.state.date} onChange={(val) => {this.setState({date:val});console.log(this.state.date)}} onBlur={(e)=>{this.props.onSub(this.state.date);/*console.log(this.state.date)*/}} showTimeSelect dateFormat="Pp" timeFormat="p" timeIntervals={15} />
            </div>
        )
    }    
}


export default Schedule;