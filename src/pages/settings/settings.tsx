import React from 'react'
import './settings.css'
import Tabs from '../../components/tabs/tabs'
import Contentmanagement from './contentmanagement/contentmanagement'
import Matadatamanagement from './metadatamanagement/metadatamanagement'
import Usermanagement from './usermanagement/usermanagement'
const SettingsV1 = () => {
  const tableitems = [
    {
      tabtitle: 'CONTENT MANAGEMENT',
      is_active: 'true',
      content: (<Contentmanagement />)
    },
    {
      tabtitle: 'METADATA MANAGEMENT',
      is_active: 'false',
      content: (<Matadatamanagement />)
    },
    {
      tabtitle: 'USER MANAGEMENT',
      is_active: 'false',
      content: (<Usermanagement />)
    },
    {
      tabtitle: 'PASCODE CONFIGURATION',
      is_active: 'false',
      content: 'content here'
      //   content: (<><Listthree /></>)
    }
  ]

  return (
        <>
            <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
                <div className="d-flex align-items-center py-1"><span className='icon-settings me-1 color-primary font-16'></span> <h2 className='poppins-semibold font-18' tabIndex={0} aria-label='Dashboard'>Settings</h2></div>
            </div>
            <div className='container'>
                <div className='row'>
                <Tabs items={tableitems} tabsul="overflow-auto" className="latobold darktext mb-2 shadow card cards-lg px-2 pt-2 border3" anchorclass="darktext poppins-semibold" />
                </div>
            </div>
        </>
  )
}
export default SettingsV1
