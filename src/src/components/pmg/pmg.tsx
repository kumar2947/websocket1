import React from 'react';
import { Link } from 'react-router-dom';
import { guidelines, templates } from './pmg-data';
import './pmg.css'
import Accordions from '../accordions/accordions';
const PMG = () => {
  const guidelinesItems = guidelines.map(guidelines =>
    <li>
      <Link to={guidelines.link} title={guidelines.title}>
        {guidelines.title}
      </Link>
    </li>
  );
  const templateItems = templates.map(templates =>
    <li>
      <Link to={templates.link} title={templates.title}>
        {templates.title}
      </Link>
    </li>
  );
  const accordionitems = [
    {
      title: "Guidelines",
      is_active: "true",
      count: "25",
      content: (
        <>
          <ul>
            {guidelinesItems}
          </ul>
        </>
      )
    },
    {
      title: 'Templates',
      is_active: "false",
      count: "20",
      content: (
        <>
          <ul>
            {templateItems}
          </ul>
        </>
      )
    }
  ];
  return (
    <>
      <div className="card-header pb-0 d-flex align-items-center">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Policy Memos & Guidelines" className="poppins-bold font-14">
            Policy Memos & Guidelines
          </div>
        </div>
      </div>
      <div className="d-flex flex-column card-body h-100 pt-0">
        <div className="max-h-250 overflow-auto pe-1">
          <div className='divcardinnerconnet p-1'>
            <div className='pmgLinks'>
              <Accordions
                items={accordionitems}
                className="accordions"
                titleIcon="icon-open-folder pe-1"
                titlecollapsedIcon="icon-close-folder pe-1"
                defaultActivekey='1'
                count="bordered px-1 ms-1 border-radius"
                inputProps={{
                  className: 'justify-content-start poppins-semibold font-13'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PMG

