import { useState } from 'react'
import PersonalForm from './components/personal-form';
import CVLayout from './components/cv-layout';

function App() {

  const [personalData, setPersonalData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  const personalQuestions=[
    {label: "Name", id:"name", type:"text"},
    {label: "Phone Number", id:"phone", type:"text"},
    {label: "Email Address", id:"email", type:"text"},
    {label: "LinkedIn Profile", id:"linkedIn", type:"text"}
  ]

  const experienceQuestions = [
    { label: "Job Title", id: "jobTitle", type: "text" },
    { label: "Company Name", id: "company", type: "text" },
    { label: "Years of Experience", id: "years", type: "number" },
    { label: "Responsibilities", id: "responsibilities", type: "textarea" }
  ];

  // Manage which form is displayed
  const [step, setStep] = useState(1);

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
    console.log(personalData)
  }

  // Callback to update personal data
  const handlePersonalChange = (id, value) => {
    setPersonalData(prevData => ({ ...prevData, [id]: value }));
  };

  // Callback to update experience data
  const handleExperienceChange = (id, value) => {
    setExperienceData(prevData => ({ ...prevData, [id]: value }));
  };

  return (
    <div className='container p-4'>
        <div className='row vh-75'>
          <div className='col-4 border border-black rounded p-2'>
            <h1>Personal Information</h1>
            {step === 1 ? (
            <div>
              <PersonalForm questions={personalQuestions} onInputChange={handlePersonalChange}/>
              <button onClick={nextStep} className="btn btn-primary mt-2">Next</button>
            </div>
          ) : (
            <div>
              <PersonalForm questions={experienceQuestions} onInputChange={handleExperienceChange} />
            </div>
          )}
          </div>
          <div className='col-8'>
            <CVLayout personalData={personalData} experienceData={experienceData} />
          </div>
        </div>
    </div>
  )
}

export default App;
