import { AllPrograms } from './calendar-data';
import { Events } from './calendar-data';
import { meetings } from './calendar-data';
import { trainings } from './calendar-data';
import Buttons from '../buttons/buttons'

interface Props {
  props:any,
  tabId:any,
}

export default function Calendartabcontent(props : Props) {
  let calendarItems : any
  if (props.tabId === 'all') {
    calendarItems = AllPrograms
  }
  if (props.tabId === 'events') {
    calendarItems = Events
  }
  if (props.tabId === 'meetings') {
    calendarItems = meetings
  }
  if (props.tabId === 'trainings') {
    calendarItems = trainings
  }
  return (
    <>
      {calendarItems.map((items :any)=>
        <div className='mb-2 calenderlist p-relative'>
          <div tabIndex={0} aria-label={items.date} className="bordered2 p-2 py-1 title-color1 mb-1 latobold">
            {items.date} {items.month}
          </div>
          <div tabIndex={0} aria-live="polite" className="meetings-border-left">
            <div className="d-flex justify-content-between title-color"> <span>{items.starttime} {items.endtime}</span>
              <Buttons
                aria-label="Refresh"
                className='ms-auto text-decoration-none lh-1 p-0  btn-link'
                icon="icon-update font-10"
                type="button"
              />
            </div>
            <div className="title-color1 font-14">{items.title}</div>
            <div className="subtitle-color1">{items.venue}</div>
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
  );
}