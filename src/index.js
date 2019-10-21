import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Root'
import rootReducer from './reducers'

export const store = createStore(rootReducer)

render(
  <Provider store={store}>
  	<BrowserRouter>
    	<Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
