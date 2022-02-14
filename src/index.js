import React from 'react'
import ReactDOM from 'react-dom'
import './css/App.css'
import reportWebVitals from './reportWebVitals'
import Header from './header/header'
import { CreateFrameworkForm } from './component/CreateFrameworkForm'

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      <Header title='Admiral took box' />
      <CreateFrameworkForm />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
