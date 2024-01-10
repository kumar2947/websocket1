import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Feedback from '../../components/feedback/feedback'
import Workflow from '../../components/workflow/workflow'
import Notifications from '../../components/notifications/notifications'
import Helpdesk from '../../components/helpdesk/helpdesk'
// const function = props => {
export default function Header () {
  return (
        <div className="header shadow5">
            <div className="container d-flex py-2 align-items-center">
                <div className="logo shadow5">
                    <Link className="p-0" title="Rhybus" to="/">
                    <img src={process.env.PUBLIC_URL + '/SiteAssets/assets/images/logo.svg'} alt='Rhybus' tabIndex={0} aria-label='Rhybus' title='Rhybus' width="200" />
                    </Link>
                </div>
                <Workflow />
                <Feedback />
                <Helpdesk />
                <Notifications />
            </div>
        </div>
  )
}
