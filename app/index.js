import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'

import './style.css'
import Main from './components/Main'
//import store from './config/store'

const App = () => {
  return (
    <Main />
  )
}

render(
  <App />,
  document.getElementById('root')
)

//<Provider store={store}>
  //<Main />
//</Provider>
