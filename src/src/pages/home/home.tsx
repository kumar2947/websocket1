/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import './home.css'
import Announcements from '../../components/announcements/announcements'
import QuickLinks from '../../components/quicklinks/quick-links'
import PMG from '../../components/pmg/pmg'
import KnowledgeArticles from '../../components/ka/knowledge-articles'
import QuestionAnswers from '../../components/qa/questions-answers'
import Tabs from '../../components/tabs/tabs'
import Listone from '../listview/tablist'
import CalendarTabs from '../../components/calendar/calendar-tabs'
import PointsOfContacts from '../../components/poc/points-of-contacts'
import Dashboardkpis from '../../components/dashboard-kpis/dashboard-kpis'
import { NORESULT } from '../../utils/constants/rhybusconfig'
import InputSelect from '../../utils/controls/input-select'
import Buttons from '../../components/buttons/buttons'
export default function Home () {
  const tableitems = [
    {
      tabtitle: 'Normal Table List',
      count: '08',
      is_active: 'true',
      // eslint-disable-next-line react/react-in-jsx-scope
      content: (<Listone />)
    }
  ]

  // KnowledgeArticles and Q&A tabs content
  // const knowledge_qa_items = [
  //     {
  //         tabtitle: 'Knowledge Articles',
  //         is_active: "true",
  //         icon: "icon-knowledgebase",
  //         content: (<><KnowledgeArticles /></>)
  //     },
  //     {
  //         tabtitle: 'Q & A',
  //         is_active: "false",
  //         icon: "icon-queans",
  //         content: (<><QuestionAnswers /></>)
  //     }
  // ];
  return (
        <>
            {/* Customor View */}
            <div className='customar-view mb-3'>
                <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
                    <div className="d-flex align-items-center py-1"><span className='icon-dashboard2 font-14 me-1 color-primary'></span> <h2 className='poppins-semibold font-18' tabIndex={0} aria-label='Dashboard'>Home</h2></div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-12 col-xl-9 mt-0">
                            <div className='row'>
                                <div className="col-sm-12 d-flex align-items-stretch">
                                    <div className="shadow card w-100">
                                        <div className="d-flex flex-column card-body h-100">
                                            <div className="d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row">
                                                <div className="d-flex mb-2 title-border">
                                                    <div tabIndex={0} aria-label="Chart 1" className="poppins-bold font-14">
                                                        Dashboard
                                                    </div>
                                                </div>
                                                <div className="py-2 px-3 d-flex flex-column flex-sm-row align-items-md-center w-100">
                                                    <div className='d-flex flex-wrap flex-column flex-sm-row justify-content-sm-end gap-2 ms-sm-auto'>
                                                        <InputSelect
                                                            inputProps={{
                                                              id: 'filter',
                                                              name: 'Filter 1',
                                                              placeholder: 'Select'
                                                            }}
                                                            label='Filter 1'
                                                            formClassName="form-horizontal text-nowrap"
                                                            className='form-sm w-100'
                                                        />
                                                        <InputSelect
                                                            inputProps={{
                                                              id: 'filter2',
                                                              name: 'Filter 2',
                                                              placeholder: 'Select'
                                                            }}
                                                            label='Filter 2'
                                                            formClassName="form-horizontal text-nowrap"
                                                            className='form-sm w-100'
                                                        />
                                                        <InputSelect
                                                            inputProps={{
                                                              id: 'filter3',
                                                              name: 'Filter 3',
                                                              placeholder: 'Select'
                                                            }}
                                                            label='Filter 3'
                                                            formClassName="form-horizontal text-nowrap"
                                                            className='form-sm w-100'
                                                        />
                                                        <InputSelect
                                                            inputProps={{
                                                              id: 'filter4',
                                                              name: 'Filter 4',
                                                              placeholder: 'Select'
                                                            }}
                                                            label='Filter 4'
                                                            formClassName="form-horizontal text-nowrap"
                                                            className='form-sm w-100'
                                                        />
                                                        <InputSelect
                                                            inputProps={{
                                                              id: 'filter5',
                                                              name: 'Filter 5',
                                                              placeholder: 'Select'
                                                            }}
                                                            label='Filter 5'
                                                            formClassName="form-horizontal text-nowrap"
                                                            className='form-sm w-100'
                                                        />
                                                    </div>
                                                    <Buttons
                                                        label="Clear All"
                                                        aria-label="Clear All"
                                                        className='btn btn-sm links ms-auto ms-md-0 text-nowrap'
                                                    />
                                                </div>
                                            </div>
                                            <Dashboardkpis />
                                            <Tabs items={tableitems} className="latobold darktext mt-3" isButtons={<Buttons
                                                label="EXPORT TO CSV"
                                                aria-label="Export to CSV"
                                                icon="icon-exportexcel me-1"
                                                className='btn btn-sm btn-primary ms-auto whitetext text-nowrap border-radius'
                                            />} anchorclass="darktext" badge="badge bgcolor-primary border-radius3 px-1 whitetext" tablistclassName="font-13" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
                                    <div className="shadow card w-100">
                                        <CalendarTabs />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
                                    <div className="shadow card w-100">
                                        <Announcements />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-3 d-flex align-items-stretch">
                            <div className="shadow card w-100 ka-qa">
                                {/* knowledge base and Q&A Info with tabs */}
                                {/* <div className="d-flex flex-column card-body">
                                <Tabs items={knowledge_qa_items} className="poppins-bold darktext" tablistclassName="font-13" />
                            </div> */}
                                <KnowledgeArticles />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Custromor View End */}
        </>
  )
}
