import React from 'react'
import InputSearch from '../../../utils/controls/input-search'
import { Discussionscontent, Statusnotescontent } from './discussions-data'
import Reply from './reply'
export default function Discussiontabcontent (props: any) {
  let calendarItems: any
  if (props.tabId === 'discussionscontent') {
    calendarItems = Discussionscontent
  }
  if (props.tabId === 'statusnotescontent') {
    calendarItems = Statusnotescontent
  }
  return (
        <>
            <div className="row d-flex flex-wrap mb-2">
                <InputSearch
                    inputProps={{
                      placeholder: 'Search',
                      arialabel: 'search'
                    }}
                    className='no-border w-100  form-sm'
                    label=""
                    searchgroup='bordered2 w-100 d-flex align-items-center border-radius'
                    formClassName="col-sm-12 mt-1"
                    icon='icon-search pe-2'
                />
            </div>
            {calendarItems.map((items: any) =>
                <div tabIndex={0} aria-live="polite" className="meetings-border-left mb-2 pb-2 border-bottom1" key={items.title}>
                    <div className="color-primary font-14 pb-1">{items.title}</div>
                    <div className='pb-1'>{items.content}</div>
                    <div className="subtitle-color1 font-12">{items.bywho} | {items.date} {items.time}</div>
                    <div className='p-relative'>
                        <Reply />
                    </div>
                </div>
            )}
        </>
  )
}
