import React from 'react'
import { Tableaccordion } from '../../components/table/table-accordians'
import './listview.css'
import Accordions from '../../components/accordions/accordions'
import InputCheck from '../../utils/controls/input-checkbox'
const Listthree = () => {
  const accordionitems = [
    {
      title: 'Guidelines',
      is_active: 'true',
      count: '25',
      extras: (
        <InputCheck
          inputProps={{
            id: 'all',
            name: 'Input Check',
            type: 'checkbox',
            label: 'All'
          }}
          formClassName='form-horizontal font-0'
          className='h-auto'
        />
      ),
      content: (
        <ul>
          <Tableaccordion />
        </ul>
      )
    },
    {
      title: 'Templates',
      is_active: 'false',
      count: '20',
      extras: (
        <InputCheck
          inputProps={{
            id: 'all',
            name: 'Input Check',
            type: 'checkbox',
            label: 'All'
          }}
          formClassName='form-horizontal font-0'
          className='h-auto'
        />
      ),
      content: (
        <ul>
          <Tableaccordion />
        </ul>
      )
    }
  ]
  return (
    <div>
      <Accordions
        items={accordionitems}
        className="accordions colored"
        titlecollapsedIcon="icon-close-folder pe-1"
        defaultActivekey='1'
        count="bordered px-1 ms-1 border-radius"
        inputProps={{
          className: 'justify-content-start poppins-semibold font-13',
          accordionheadClass: 'border-primary border-radius overflow-hidden',
          contentclassName: 'p-0'

        }}
      />
    </div>
  )
}
export default Listthree
