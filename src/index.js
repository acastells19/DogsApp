import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Main } from './components/Main'
import rootReducer from './reducers'

export const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
