import {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import getMinutes from 'date-fns/getMinutes'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const MyCalendar = props => {

    // console.log(props.tasks);

    // const [events,setEvents] = useState({title:'',start:'',end:''})
    var Events = []
    props.tasks.forEach(task => {
        var tsk = {title:task.topic,start:new Date(task.startTime),end:new Date(task.endTime)}
        Events.push(tsk)
    })
    console.log(Events);

    return (
    <div>
        <Calendar
        localizer={localizer}
        events={Events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        />
    </div>
    );
}

export default MyCalendar;