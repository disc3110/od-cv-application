import { useState } from 'react'
import PersonalForm from './components/personal-form';
import CVLayout from './components/cv-layout';

function App() {

  return (
    <div className='container p-4'>
        <div className='row vh-75'>
          <div className='col-4 border border-black rounded p-2'>
            <h1>Personal Information</h1>
            <PersonalForm />
          </div>
          <div className='col-8'>
            <CVLayout />
          </div>
        </div>
    </div>
  )
}

export default App;
