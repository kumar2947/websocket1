/* eslint-disable react/no-unknown-property */
import { AllPrograms, Actions, Notifications } from './notifications-data'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  tabId?:any,
}

export default function Notificationtabcontent (props : Props) {
  let notificationItems : any = []
  if (props.tabId === 'all') {
    notificationItems = AllPrograms
  }
  if (props.tabId === 'actions') {
    notificationItems = Actions
  }
  if (props.tabId === 'notifications') {
    notificationItems = Notifications
  }
  const listItems = notificationItems.map((items : any) =>
        // <div className='mb-2'>
        //     <div tabIndex={0} aria-label={items.date} className="bordered p-2 py-1 title-color1 mb-1 latobold">
        //         {items.date}
        //     </div>
        //     <div tabIndex={0} aria-live="polite" className="meetings-border-left">
        //         <div className="d-flex justify-content-between title-color"> <span>{items.time}</span>
        //             <Buttons
        //                 aria-label="Refresh"
        //                 className='ms-auto text-decoration-none lh-1 p-0  btn-link'
        //                 icon="icon-update font-10"
        //                 type="button"
        //             />
        //         </div>
        //         <div className="title-color1 font-14">{items.title}</div>
        //         <div className="subtitle-color1">{items.venue}</div>
        //     </div>
        // </div>
        <li tabIndex={0} aria-describedby={items.id} id={items.id} className={items.listclassname} notification-code={items.colorcode} key={items.idcontent}>
                    <div>
                      <span>{items.content1}</span>
                      <Link
                        to="#"
                        title={items.idcontent}
                        className="links"
                      >
                        {items.idcontent}
                      </Link>
                      <span> {items.content2}</span>
                    </div>
                    <div className="subtitle-color2 latoregular">
                    {items.date}
                    </div>
                  </li>
  )
  return (
        <>
        <ul>
            {listItems}
            </ul>
        </>
  )
}
