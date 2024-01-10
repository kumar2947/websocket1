/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import Vtabs from '../../../components/tabs/vtabs'
import Announcements from './announcements/announcements'
import Calendar from './calendar'
import Knoledgegraph from './knoledgegraph/knoledgegraph'
import Settingspoc from './settins-poc/settings-poc'
import Settingsquicklinks from './quicklinks/quicklinks'
import SettingsPMG from './settings-pmg/settings-pmg'
import SettingsQA from './settings-qa/settings-qa'
const Contentmanagement = () => {
  const [height1, setHeight] = useState(0)
  const elementRef1 = useRef(null)
  const getHeight = (val:any) => {
    setHeight(val)
  }
  const tableitems = [
    {
      tabtitle: 'Announcements',
      is_active: 'true',
      icon: 'icon-announcements circled-icon font-13 me-1',
      content: (<Announcements findHeight={getHeight} />)
    },
    {
      tabtitle: 'Calendar',
      is_active: 'false',
      icon: 'icon-calendar circled-icon font-13 me-1',
      content: (<Calendar />)
    },
    {
      tabtitle: 'Knowledge Graph',
      is_active: 'false',
      icon: 'icon-knowledge-graph circled-icon font-14 me-1',
      content: (<Knoledgegraph findHeight={getHeight} />)
    },
    {
      tabtitle: 'Points of Contact',
      is_active: 'false',
      icon: 'icon-poc circled-icon font-13 me-1',
      content: (<Settingspoc findHeight={getHeight} />)
    },
    {
      tabtitle: 'Policy Memos & Guidelines',
      is_active: 'false',
      icon: 'icon-pmg circled-icon font-13 me-1',
      content: (<SettingsPMG findHeight={getHeight} />)
    },
    {
      tabtitle: 'Quick Links',
      is_active: 'false',
      icon: 'icon-quicklinks2 circled-icon font-13 me-1',
      content: (<Settingsquicklinks findHeight={getHeight} />)
    },
    {
      tabtitle: 'Q & A',
      is_active: 'false',
      icon: 'icon-qa circled-icon font-13 me-1',
      content: (<SettingsQA findHeight={getHeight} />)
    }
  ]
  return (
      <div className='container'>
        <div className='row'>
          <div style={{ height: height1 + 16 }} className='shadow card mt-0 p-0 tabscontent-height' ref={elementRef1}>
            <Vtabs items={tableitems} className="w-100 h-100" mainTabsclass="card-body v-tabs h-100" tablistclassName="w-100" tabscontentarea="w-100 border-left1 ps-2" anchorclass="darktext font-13 poppins-semibold" />
          </div>
        </div>
      </div>
  )
}
export default Contentmanagement
