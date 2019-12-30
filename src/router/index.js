
import {HashRouter as Router, Route, Link } from 'react-router-dom'
import React, {Component} from 'react'

import Login from '../pages/login/login'
import Home from '../pages/home/index'
const Routers = ()=>{
    return (
        <Router>
             <div id='router-root'>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/home" component={Home}></Route>
            </div>
        </Router>
    )
}

export default Routers