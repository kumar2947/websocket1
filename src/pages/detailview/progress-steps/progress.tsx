import React from 'react'
import { progressbar } from './progress-data'
import './progress.css'
export default function Progressbar () {
  return (
        <>
            <div className='card-header border-bottom1 d-flex align-items-center'>
                <div tabIndex={0} aria-label='Inquiry Status' className='title-color4 poppins-bold'>Inquiry Status</div>
            </div>
            <div className="card-body ">
                <div className="ms-auto">
                    <ul className='list-type-none progress v-steps w-100'>
                        {progressbar.map(progresssitems =>
                            <li className="px-2 px-xl-3" key={progresssitems.title}>
                                <div className="progress-steps">
                                    <div className="circle tool-tip tooltip-bottom" data-tip={progresssitems.title}>&nbsp;</div>
                                    <div tabIndex={0} className="progress-title pb-1 d-flex flex-column" aria-live="polite">
                                        <span>{progresssitems.title}</span>
                                        <span className="font-10 subtitle-color1">{progresssitems.name}</span>
                                        <span className="font-10 subtitle-color1">{progresssitems.date}-{progresssitems.time}</span>
                                        <span className="border-primary maxfitcontent color-primary mt-1 p-1 border-radius">{progresssitems.status}</span>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
  )
}
