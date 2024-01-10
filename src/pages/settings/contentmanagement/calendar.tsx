/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Buttons from '../../../components/buttons/buttons'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import '../../calendar/commonMain.css'
import '../../calendar/main.css'
import '../../calendar/timegrid.css'
const Calendar = () => {
  const [state, setState] = useState<{events: any; }>({
    events: []
  })
  const calendarComponentRef = React.createRef()
  const handleDateClick = (arg :any) => {
    alert(arg.dateStr)
  }
  const handleSelectedDates = (info :any) => {
    setState({
      events: [
        { id: 1, title: 'event 1', date: '2019-12-01' },
        {
          title: 'event 2',
          start: '2019-12-01',
          end: '2019-12-05',
          allDay: true,
          HostName: 'William'
        },
        {
          title: 'event 3',
          start: '2019-12-05',
          end: '2019-12-07',
          allDay: true
        },
        {
          title: 'event 4',
          start: '2019-12-05',
          end: '2019-12-07',
          allDay: true
        },
        {
          title: 'event 5',
          start: '2019-12-05',
          end: '2019-12-07',
          allDay: true
        },
        {
          title: 'event 6',
          start: '2019-12-05',
          end: '2019-12-07',
          allDay: true
        }
      ]
    })

    alert('selected ' + info.startStr + ' to ' + info.endStr)
    const title = prompt("What's the name of the title")
    console.log(info)
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      }
      const data = [state?.events, newEvent]
      setState({ events: data })
      console.log('here', data)
    } else {
      console.log('nothing')
    }
  }
  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  function renderEventContent (eventInfo:any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  return (
    <>
      <div className='mb-2 p-0 d-flex'>
        <h2><span className="icon-calendar font-13 pe-2"></span> Calendar</h2>
        <Buttons
          label="Add Event"
          aria-label="Add Event"
          icon="icon-add me-1"
          className='btn-sm btn-primary ms-auto whitetext text-nowrap border-radius'
        />
      </div>
      <div className="shadow card">
        <div className="card-body ">

          <div className="SettingCalendar">
            {/*  <FullCalendar
              schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
              // ref={calendarComponentRef}
              defaultView="dayGridMonth"
              dateClick={handleDateClick}
              displayEventTime={true}
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }}
              selectable={true}
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin,
                resourceTimeGridPlugin
              ]}
              eventClick={event => {
                console.log(event.event._def.publicId)
              }}
              events={state?.events}
              select={handleSelectedDates}
              eventLimit={3}
            /> */}
            <FullCalendar
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            displayEventTime={true}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            selectable={true}
        plugins={[dayGridPlugin,
          interactionPlugin,
          timeGridPlugin]}
        weekends={false}
        events={events}
        eventContent={renderEventContent}
        select={handleSelectedDates}
      />
          </div>

        </div>
      </div>
    </>
  )
}
export default Calendar
