import {createStore, compose} from 'redux'
import middleWare from '../util/middleware'

import reducers from '../reducers'

export default ()=>{
    // const enhancer = compose(middleWare)
    let store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    return { store }
}