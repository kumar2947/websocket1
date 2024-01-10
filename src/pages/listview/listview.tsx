import React from 'react'
import Tabs from '../../components/tabs/tabs'
import Listone from './tablist'
import Listtwo from './listtwo'
import './listview.css'
import Filters from '../../components/filters/filters'
import Kpis from '../../components/kpi/kpi'
import Buttons from '../../components/buttons/buttons'
import Listthree from './listtthree'

const ListView = () => {
  const tableitems = [
    {
      tabtitle: 'Normal Table List',
      count: '08',
      is_active: 'true',
      content: (<><Listone /></>)
    },
    {
      tabtitle: 'Row spaced List',
      count: '08',
      is_active: 'false',
      content: (<><Listtwo /></>)
    },
    {
      tabtitle: 'Accordion Table List',
      count: '08',
      is_active: 'false',
      content: (<><Listthree /></>)
    }
  ]
  return (
    <>
      <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
        <div className="d-flex align-items-center py-1"><span className='icon-requirements font-14 me-1 color-primary'></span> <h2 className="poppins-semibold font-18" tabIndex={0} aria-label='Title'>Title</h2></div>
        <Buttons
          label="EXPORT TO CSV"
          aria-label="Export to CSV"
          icon="icon-exportexcel me-1"
          className='btn btn-sm btn-primary ms-auto whitetext text-nowrap border-radius'
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='colsm-12 col-lg listview-table'>
            <div className="shadow card w-100 h-100">
              <div className="card-body">
                <Tabs items={tableitems} className="latobold darktext" anchorclass="darktext" badge="badge bgcolor-primary border-radius3 px-1 whitetext" tablistclassName="font-13 overflow-auto" />
              </div>
            </div>
          </div>
          <div className='colsm-12 listview-filters order-first order-lg-0'>
            <div className="w-100 h-100 whitebg bordered1">
              <div className='filter-section mb-3'>
                <Filters />
              </div>
              <div className='kpis-section mb-3'>
                <Kpis />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ListView
