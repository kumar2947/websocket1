import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './menus.css'
export default function Menus () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  useEffect(() => {
    if (windowSize.innerWidth > 2000) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [windowSize])
  useEffect(() => {
    function handleWindowResize () {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  function getWindowSize () {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }
  const menuitem = [
    {
      path: '/',
      activepath: ['announcements', 'knowledgearticles'],
      name: 'Home',
      icon: 'icon-dashboard2'
    },
    {
      path: '/list-view',
      activepath: ['detail-view'],
      name: 'List View',
      icon: 'icon-requirements'
    },
    {
      path: '/form',
      activepath: ['form'],
      name: 'Form',
      icon: 'icon-create'
    },
    {
      path: '/settings',
      activepath: ['settings'],
      name: 'Settings',
      icon: 'icon-settings'
    }
  ]
  function activeClass (item: { path: string; activepath: { toString: () => string; }[]; }) {
    let ischecked = false
    item?.activepath.forEach(element => {
      if (splitLocation[1] === item.path || splitLocation[1] === element) {
        ischecked = true
      }
    })
    return ischecked
  }
  return (
    <div className={isOpen ? 'menus menuexpand' : 'menus menucollapsed'}>
      <div className='container'>
        <div className='sidebar'>
          <div className='sidebar-logo whitebg'>
            <Link className="p-0" title="Rhybus" to="/">
              <img src={process.env.PUBLIC_URL + '/SiteAssets/assets/images/logo.svg'} alt='Rhybus' title='Rhybus' width="200" />
            </Link>
          </div>
          <div tabIndex={0} title={isOpen ? 'Collapse' : 'Expand'} className={isOpen ? 'ms-auto maxfitcontent whitetext p-2 toggle-icon icon-expand1' : 'ms-auto maxfitcontent whitetext p-2 toggle-icon icon-collapsed'} onClick={toggle}></div>
          <ul>
            {menuitem.map((item, index) => (
              <li key={item.name}>
                <NavLink to={item.path} key={index} className={activeClass(item) ? 'link active' : 'link'} title={item.name} activeClassName="active" exact>
                  <div className={item.icon}></div>
                  <div className='menuitems'>{item.name}</div>
                </NavLink>
              </li>
            ))
            }
          </ul>
          {/* <main>{children}</main> */}
        </div>
      </div>
    </div>
  )
}
