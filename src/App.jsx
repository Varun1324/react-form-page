// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const UserForm = lazy(() => import('./components/UserForm/UserForm'));
const FormComponent = lazy(() => import('./components/FormComponent/FormComponent'));
const GuestForm = lazy(() => import('./components/GuestForm/GuestForm'));
const AlreadyRegistertedCard = lazy(() => import('./components/AlreadyRegistertedCard/AlreadyRegistertedCard'));
const StudentPass = lazy(() => import('./components/StudentPass/StudentPass'));
const ConfrimPass = lazy(() => import('./components/ConfrimPass/ConfrimPass'));
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div style={{color:"white"}}>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/guestForm" element={<GuestForm />} />
          <Route path="/alreadyRegisteredCard" element={<AlreadyRegistertedCard />} />
          <Route path="/generatePass" element={<StudentPass />} />
          <Route path="/confrimPass" element={<ConfrimPass />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
