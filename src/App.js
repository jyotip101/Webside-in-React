import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navber'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route psth='/' exact />
        </Switch>
      </Router>
    </>
  )
}

export default App
