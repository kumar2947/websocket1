/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { dashboardkpis } from './dashboard-kpis-data'
import './dashboard-kpis.css'
export default function Dashboardkpis () {
  return (
    <>
      <div className='row'>
        {dashboardkpis.map(dashboardkpis =>
          <div className='col' key={dashboardkpis.title}>
            <a tabIndex={0} title={`${dashboardkpis.title} ${dashboardkpis.count}`} className="shadow card p-0 w-100 d-flex kpiborder justify-content-between card-body h-100" status-kpis={dashboardkpis.kpicode}>
              <h2 className='dashboard-kpi-title p-2 ps-3 darktext d-flex align-items-center poppins-bold font-14'>{dashboardkpis.title}</h2>
              <h2 className="border-left1  p-2 px-3 color-primary d-flex align-items-center poppins-bold font-22">{dashboardkpis.count}</h2>
            </a>
          </div>
        )}
      </div>
    </>
  )
}
