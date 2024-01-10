import React from 'react'
import './calendar.css'
import { Link } from 'react-router-dom'
// import Tabs from "../tabs/tabs";
// import Calendartabcontent from "./tab-items";
import Calendaritems from './calendar-items'
const CalendarTabs = () => {
  // below commented code for tab calendar
  // const calendar_items = [
  //   {
  //     tabtitle: 'All',
  //     is_active: "true",
  //     content: (<><Calendartabcontent tabId={"all"} /></>)
  //   },
  //   {
  //     tabtitle: 'Events',
  //     is_active: "false",
  //     content: (<><Calendartabcontent tabId={"events"} /></>)
  //   },
  //   {
  //     tabtitle: 'Meetings',
  //     is_active: "false",
  //     content: (<><Calendartabcontent tabId={"meetings"} /></>)
  //   },
  //   {
  //     tabtitle: 'Trainings',
  //     is_active: "false",
  //     content: (<><Calendartabcontent tabId={"trainings"} /></>)
  //   }
  // ];
  return (
    <>
      <div className="card-header pb-0 d-flex align-items-center justify-content-between">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Calendar" className="poppins-bold font-14">Calendar</div>
        </div>
        <Link title="View All" to="/calendar" className="links-underline font-12 links">
          View All
        </Link>
      </div>
      <div className="card-body pt-0">
        <Calendaritems />
        {/* below commented code for tab calendar */}
        {/* <Tabs items={calendar_items} contentstyles="pe-1" className="latobold darktext" tablistclassName="font-13" /> */}

      </div>
    </>
  )
}
export default CalendarTabs
