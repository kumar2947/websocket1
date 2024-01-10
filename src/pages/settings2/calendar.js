

import React, { useState } from "react";
import Buttons from "../../components/buttons/buttons";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
const Calendar = () => {
  let [state, setState] = useState({
    events: [],

  });

  const calendarComponentRef = React.createRef();


  const handleDateClick = arg => {
    alert(arg.dateStr);
  };


  const handleSelectedDates = info => {
    setState({
      events: [
        { id: 1, title: "event 1", date: "2019-12-01" },
        {
          title: "event 2",
          start: "2019-12-01",
          end: "2019-12-05",
          allDay: true,
          HostName: "William"
        },
        {
          title: "event 3",
          start: "2019-12-05",
          end: "2019-12-07",
          allDay: true
        },
        {
          title: "event 4",
          start: "2019-12-05",
          end: "2019-12-07",
          allDay: true
        },
        {
          title: "event 5",
          start: "2019-12-05",
          end: "2019-12-07",
          allDay: true
        },
        {
          title: "event 6",
          start: "2019-12-05",
          end: "2019-12-07",
          allDay: true
        }
      ]
    })

    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };
      const data = [state?.events, newEvent];
      setState({ events: data });
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Calendar' className="font-14 d-flex align-items-center"> <span className="icon-calendar font-13 pe-2"></span> Calendar</h2></div>
        <div className='ms-auto'>
          <Buttons
            label="Add Event"
            className="btn-xs montserratBold font-12 text-uppercase text-color1 addbtn border-radius px-2"
            icon="icon-add font-10 pe-1"
            type="button"

          />
        </div>
      </div>
      <div className="shadow card">
        <div className="card-body ">

          <div className="SettingCalendar">
            <FullCalendar
              schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
              ref={calendarComponentRef}
              defaultView="dayGridMonth"
              dateClick={handleDateClick}
              displayEventTime={true}
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              selectable={true}
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin,
                resourceTimeGridPlugin
              ]}
              eventClick={event => {
                console.log(event.event._def.publicId);
              }}
              events={state?.events}
              select={handleSelectedDates}
              eventLimit={3}
            />
          </div>

        </div>
      </div>


    </>
  );
};
export default Calendar;
