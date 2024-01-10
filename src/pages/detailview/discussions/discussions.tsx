/* eslint-disable camelcase */
import React from 'react'
import Adddiscussion from './add-discussion'
import Discussiontabcontent from './discussion-tabitems'
import './discussions.css'
import Tabs from '../../../components/tabs/tabs'
export default function Discussions () {
  const dicussion_items = [
    {
      tabtitle: 'Discussions',
      count: '08',
      is_active: 'true',
      content: tabContentbyID('discussionscontent')
    },
    {
      tabtitle: 'Status Notes',
      count: '02',
      is_active: 'false',
      content: tabContentbyID('statusnotescontent')
    }
  ]
  function tabContentbyID (tabid: any) {
    return (
            <Discussiontabcontent tabId={tabid} />
    )
  }
  return (
        <div className="card-body ">
            <Tabs items={dicussion_items} tabsul="d-flex align-items-start lh-normal" anchorclass="title-color4 poppins-bold" badge="badge bgcolor-primary border-radius3 px-1 whitetext" className="latobold" isButtons={<Adddiscussion />} tablistclassName="font-13 me-auto" />
        </div>
  )
}
