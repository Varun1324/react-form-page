// eslint-disable-next-line no-unused-vars
import React from 'react'
import UserForm from './components/UserForm/UserForm'
import FormComponent from './components/FormComponent/FormComponent'
import GuestForm from './components/GuestForm/GuestForm'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "./App.css";
import { AlreadyRegistertedCard } from './components/AlreadyRegistertedCard/AlreadyRegistertedCard';
import StudentPass from './components/StudentPass/StudentPass';
import ConfrimPass  from './components/ConfrimPass/ConfrimPass';

function  App() {
  return (
    
    <>
      <Router>
    <Routes>
    
      <Route path="/" element={<FormComponent />} />
      <Route path="/userform" element={<UserForm />} /> 
      <Route path="/guestForm" element={<GuestForm />} />
      <Route path="/alreadyRegistered" element={<AlreadyRegistertedCard />} />
      <Route path="/generatePass" element={<StudentPass />} />
      <Route path="/confrimPass" element={<ConfrimPass/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App