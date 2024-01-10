import React from 'react'
import { AllPrograms } from './calendar-data'
export default function Calendaritems (props : any) {
  return (
    <>
    <div>
      <ul className='clalendar-item-type'>
        <li className='dots dots-color1'>Events</li>
        <li className='dots dots-color2'>Trainings</li>
        <li className='dots dots-color3'>Meetings</li>
      </ul>
    </div>

      {AllPrograms.slice(0, 3).map(items =>
        <div id={items.id} className="mb-2 calenderlist bordered1 border-radius1 p-1 pe-3 dots d-flex p-relative" key={items.title}>
          <div tabIndex={0} aria-label={items.date} className="p-2 py-1 border-right2 me-2 title-color8 mb-1 montserratbold text-center">
            <p>{items.date}</p>
            <p>{items.month}</p>
          </div>
          <div tabIndex={0} aria-live="polite" className="meetings-border-left">
          <div className="title-color1 font-14">{items.title}</div>
            <div className="subtitle-color1">
            Venue: {items.venue} | Time: {items.starttime} {items.endtime}
            </div>
          </div>

          <div className="calendarpopup">
              <div className="divarrow"></div>
              <div className="calendarpopupinfo">
                <h2 tabIndex={0} aria-label={items.title}>{items.title}</h2>
                <div className="divcalendarinfo w-100 position-relative">
                  <ul className="m-0 p-0 w-100 list-type-none">
                    <li className='mb-1'>
                      Start: <span>{items.starttime}</span>
                    </li>
                    <li className='mb-1'>
                      End: <span>{items.endtime}</span>
                    </li>
                    <li className='mb-1'>
                    Venue: <span>{items.venue}</span>
                    </li>
                  </ul>
                  <h3 tabIndex={0} aria-label="Discription">Discription:</h3>
                  <p tabIndex={0} aria-label={items.discription}>{items.discription}</p>
                </div>
              </div>
            </div>
        </div>
      )}
    </>
  )
}
