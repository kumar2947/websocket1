import React from 'react'
import Buttons from '../../../components/buttons/buttons'
import { detailsitems } from './details-data'
import './details.css'
export default function Details () {
  return (
        <>
            <div className='card-header border-bottom1 d-flex align-items-center'>
                <div className='title-color4 poppins-bold'>Details</div>
                <Buttons
                    label="Edit"
                    aria-label="Edit"
                    icon="icon-pencil me-1 font-12"
                    className='btn-xs font-14 btn-border color-primary uppercase text-nowrap border-radius3 ms-auto'
                />
            </div>
            <div className="card-body">
                <div className='d-flex align-items-center flex-wrap justify-content-between width-fitcontent'>
                    {detailsitems.map(detailsdata =>
                        <div className='font-11  mb-2' tabIndex={0} aria-label={`${detailsdata.subtitle} ${detailsdata.title}`} key={detailsdata.title}>
                            <p className='subtitle-color'>{detailsdata.subtitle}</p>
                            <p>{detailsdata.title}</p>
                        </div>
                    )}
                </div>
                <div className="mt-2 font-13">
                    <div tabIndex={0} aria-label='Description' className='subtitle-color pb-1'> Description</div>
                    <div tabIndex={0} id="details-ddescription" aria-describedby='details-ddescription'>
                        <p className='pb-2'>Para contant</p>
                        <p className='pb-2'>Para1 contant</p>
                        <p className='pb-2'>Para3 contant</p>
                    </div>
                </div>
            </div>
        </>
  )
}
