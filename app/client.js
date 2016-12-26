import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

//store
import store from './store'

//pages
import MainPage from './pages/MainPage'
import OtherPage from './pages/OtherPage'

//entry point
const app = document.getElementById('app')

//render igoaloApp and set up routes
ReactDOM.render(
   <Provider store={store}>
      <Router history={hashHistory}>
           <Route path='/' component={MainPage} />
             <Route path='/otherpage' component={OtherPage}></Route>
       </Router>
   </Provider>, app
)
