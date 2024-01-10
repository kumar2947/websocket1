import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, ListView, DetailedView, CreateForm, Settings, Announcements, KnowledgeArticles, QandA, Calendar, PointsOfContacts } from '../pages/index'
import { Header, Menus } from '../layouts/index'
import React from 'react'
const Routers = () => {
  return (
        <div className='side-menus'>
            <Router>
                <Header />
                <div className='mainwrapper'>
                    <Menus />
                    <div className='w-100'>
                        <Header />
                        <div className='wrapper'>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/list-view' exact component={ListView} />
                                <Route path='/detail-view/' exact component={DetailedView} />
                                <Route path='/form' exact component={CreateForm} />
                                <Route path='/settings' exact component={Settings} />
                                <Route path='/announcements' exact component={Announcements} />
                                <Route path='/knowledgearticles' exact component={KnowledgeArticles} />
                                <Route path='/qa' exact component={QandA} />
                                <Route path='/calendar' exact component={Calendar} />
                                <Route path='/poc' exact component={PointsOfContacts} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
  )
}

export default Routers
