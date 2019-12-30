import React , { Component}from 'react'
import {Provider} from 'react-redux'
import AppRouter from './router'

import configureStore from './store'
const {store} = configureStore();
class MainApp extends Component {
    render(){
       return ( 
            <Provider store={store}>
                <AppRouter></AppRouter>
            </Provider>)
    } 
}

export default MainApp;