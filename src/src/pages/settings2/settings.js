/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./settings.css";
import Accordions from '../../components/accordions/accordions';
// import { NORESULT } from '../../utils/constants/rhybusconfig'
import Announcements from "../settings/announcements/announcements";
import Calendar from './calendar';
import PointsofContact from '../settings/pointsofcontact/pointsofcontact';
import PolicyMemosGuidelines from '../settings/policymemosguidelines/policymemosguidelines';
import QuickLinks from '../settings/quicklinks/quicklinks';
import KnowledgeArticles from '../settings/knowledgearticles/knowledgearticles';
import QandA from '../settings/qanda/qanda';
import UserGroups from './usergroups'
import DBConfiguration from "./dbconfiguration/dbconfiguration";
import DataMigration from "./datamigration/datamigration";
import JobsConfiguration from "./jobsconfiguration/jobsconfiguration";
import FormTooltips from "./formtooltips/formtooltips";
import SiteFeedback from "./sitefeedback/sitefeedback";
const Settings = () => {
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";
  const accordionitems = [
    {
      title: "Content Management",
      is_active: "true",

      content: (
        <>
          <ul className='settingslist'>
            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  1, "active")}`}
                onClick={() => toggleTab(1)}
                title="Announcements"
                tabIndex={0}
                aria-labelledby="tab-1"
                role="tab"
                aria-label="Announcements">
                <span className="icon-announcement font-11 pe-2"></span>
                Announcements
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  2, "active")}`}
                onClick={() => toggleTab(2)}
                title="Calendar"
                tabIndex={0}
                aria-labelledby="tab-2"
                role="tab"
                aria-label="Calendar">
                <span className="icon-calendar font-13 pe-2"></span>
                Calendar
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  3, "active")}`}
                onClick={() => toggleTab(3)}
                title="Points of Contact"
                tabIndex={0}
                aria-labelledby="tab-3"
                role="tab"
                aria-label="Points of Contact">
                <span className="icon-adduser font-12 pe-2"></span>
                Points of Contact
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  4, "active")}`}
                onClick={() => toggleTab(4)}
                title="Policy Memos & Guidelines"
                tabIndex={0}
                aria-labelledby="tab-4"
                role="tab"
                aria-label="Policy Memos & Guidelines">
                <span className="icon-policyfile font-13 pe-2"></span>
                Policy Memos & Guidelines
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  5, "active")}`}
                onClick={() => toggleTab(5)}
                title="Quick Links"
                tabIndex={0}
                aria-labelledby="tab-5"
                role="tab"
                aria-label="Quick Links">
                <span className="icon-quicklinks font-13 pe-2"></span>
                Quick Links
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  6, "active")}`}
                onClick={() => toggleTab(6)}
                title="Knowledge Articles"
                tabIndex={0}
                aria-labelledby="tab-6"
                role="tab"
                aria-label="Knowledge Articles">
                <span className="icon-knowledgebase font-16 pe-2"></span>
                Knowledge Articles
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  7, "active")}`}
                onClick={() => toggleTab(7)}
                title="Q & A"
                tabIndex={0}
                aria-labelledby="tab-7"
                role="tab"
                aria-label="Q & A">
                <span className="icon-queans font-13 pe-2"></span>
                Q & A
              </a>
            </li>




          </ul>
        </>
      )
    },
    {
      title: 'User Management',
      is_active: "false",

      content: (
        <>
          <ul className='settingslist'>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  8, "active")}`}
                onClick={() => toggleTab(8)}
                title="User Groups"
                tabIndex={0}
                aria-labelledby="tab-8"
                role="tab"
                aria-label="User Groups">
                <span className="icon-adduser font-13 pe-2"></span>
                User Groups
              </a>
            </li>


          </ul>
        </>
      )
    },
    {
      title: 'Metadata Management',
      is_active: "false",

      content: (
        <>
          <ul className='settingslist'>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  9, "active")}`}
                onClick={() => toggleTab(9)}
                title="Form Tooltips"
                tabIndex={0}
                aria-labelledby="tab-9"
                role="tab"
                aria-label="Form Tooltips">
                <span className="icon-info font-13 pe-2"></span>
                Form Tooltips
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  10, "active")}`}
                onClick={() => toggleTab(10)}
                title="Site Feedback"
                tabIndex={0}
                aria-labelledby="tab-10"
                role="tab"
                aria-label="Site Feedback">
                <span className="icon-feedback font-14 pe-2"></span>
                Site Feedback
              </a>
            </li>


          </ul>
        </>
      )
    },
    {
      title: 'Configuration Management',
      is_active: "false",

      content: (
        <>
          <ul className='settingslist'>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  11, "active")}`}
                onClick={() => toggleTab(11)}
                title="DB Configuration"
                tabIndex={0}
                aria-labelledby="tab-11"
                role="tab"
                aria-label="DB Configuration">
                <span className="icon-fileInfo font-13 pe-2"></span>
                DB Configuration
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  12, "active")}`}
                onClick={() => toggleTab(12)}
                title="Data Migration"
                tabIndex={0}
                aria-labelledby="tab-12"
                role="tab"
                aria-label="Data Migration">
                <span className="icon-fileInfo font-13 pe-2"></span>
                Data Migration
              </a>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                className={`tabs montserratSemibold font-12   ${getActiveClass(
                  13, "active")}`}
                onClick={() => toggleTab(13)}
                title="Jobs Configuration"
                tabIndex={0}
                aria-labelledby="tab-13"
                role="tab"
                aria-label="Jobs Configuration">
                <span className="icon-fileInfo font-13 pe-2"></span>
                Jobs Configuration
              </a>
            </li>





          </ul>
        </>
      )
    },

  ];
  return (
    <div className='divdetailview py-2 w-100'>
      <div className='container'>
        <div className="my-2 d-flex align-items-center">
          <div className="d-flex align-items-center"><h2 tabIndex={0} title='Title'>Settings</h2></div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-lg-3'>
            <div className="shadow card">
              <div className="card-body">
                <Accordions
                  items={accordionitems}
                  className="accordions"
                  titleIcon="icon-thinright-arrow pe-1"
                  titlecollapsedIcon="icon-arrow-down pe-1"
                  defaultActivekey='1'
                  count="accordian-bordered px-1"
                  inputProps={{
                    className: 'test'
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-lg-9 settingtabcontent'>
            <div className={`tabcontent ${getActiveClass(1, "tabactivecontent")}`} id="tab-1">
              <Announcements />
            </div>
            <div className={`tabcontent ${getActiveClass(2, "tabactivecontent")}`} id="tab-2">
              <Calendar />
            </div>
            <div className={`tabcontent ${getActiveClass(3, "tabactivecontent")}`} id="tab-3">
              <PointsofContact />
            </div>
            <div className={`tabcontent ${getActiveClass(4, "tabactivecontent")}`} id="tab-4">
              <PolicyMemosGuidelines />
            </div>
            <div className={`tabcontent ${getActiveClass(5, "tabactivecontent")}`} id="tab-5">
              <QuickLinks />
            </div>
            <div className={`tabcontent ${getActiveClass(6, "tabactivecontent")}`} id="tab-6">
              <KnowledgeArticles />
            </div>
            <div className={`tabcontent ${getActiveClass(7, "tabactivecontent")}`} id="tab-7">
              <QandA />
            </div>
            <div className={`tabcontent ${getActiveClass(8, "tabactivecontent")}`} id="tab-8">
              <UserGroups />
            </div>
            <div className={`tabcontent ${getActiveClass(9, "tabactivecontent")}`} id="tab-9">
              <FormTooltips />
            </div>

            <div className={`tabcontent ${getActiveClass(10, "tabactivecontent")}`} id="tab-10">
              <SiteFeedback />
            </div>

            <div className={`tabcontent ${getActiveClass(11, "tabactivecontent")}`} id="tab-11">
              <DBConfiguration />
            </div>
            <div className={`tabcontent ${getActiveClass(12, "tabactivecontent")}`} id="tab-12">
              <DataMigration />
            </div>
            <div className={`tabcontent ${getActiveClass(13, "tabactivecontent")}`} id="tab-13">
              <JobsConfiguration />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Settings



