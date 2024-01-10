import React from 'react'
import DetailKPIs from '../detail-kpis/detail-kpis'
import Accordions from '../../accordions/accordions'
const Accordionkpis = () => {
  const accordionitems = [
    {
      title: 'KPI Title',
      is_active: 'true',
      count: '02',
      content: (
        <>
          <DetailKPIs accordiontitle={'discovery'} />
        </>
      )
    },
    {
      title: 'KPI Title 1',
      is_active: 'false',
      count: '02',
      content: (
        <>
          <DetailKPIs accordiontitle={'appointingauthority'} />
        </>
      )
    }
  ]
  return (
    <Accordions
      items={accordionitems}
      className="accordions accordion-bordered border-radius overflow-hidden"
      titleIcon="icon-chevron-up font-10 px-1"
      titlecollapsedIcon="icon-chevron-down font-10 px-1"
      defaultActivekey='1'
      count="border-left1 p-2 ms-auto"
      inputProps={{
        className: 'w-100 p-0'
      }}
    />
  )
}
export default Accordionkpis
