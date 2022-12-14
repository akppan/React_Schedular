import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
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

    var Events = []
    props.tasks.forEach(task => {
        var tsk = {title:task.topic,start:new Date(task.startTime),end:new Date(task.endTime)}
        Events.push(tsk)
    })

    return (
    <div style={{margin:'15px'}}>
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