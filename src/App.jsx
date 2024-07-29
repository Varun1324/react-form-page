// eslint-disable-next-line no-unused-vars
import React from 'react'
import UserForm from './components/UserForm/UserForm'
import FormComponent from './components/FormComponent/FormComponent'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import TestPass from './components/TestPass/TestPass';


function  App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FormComponent />} />
      <Route path="/userform" element={<UserForm />} /> 
    </Routes>
    </Router>
  )
}

export default App