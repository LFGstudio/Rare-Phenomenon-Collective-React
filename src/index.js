import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Section from './views/section'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Section} exact path="/" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
